import fs from "node:fs/promises";
import path from "node:path";

const TARGET_URL = process.argv[2] || "https://www.google.com/search?q=Great+Kminor";
const OUTPUT_FILE = process.argv[3] || "gmb-reviews.json";
const BROWSER_PATH = process.env.PUPPETEER_EXECUTABLE_PATH || process.argv[4] || null;

async function run() {
  // Lazy import so users only need puppeteer when they run this script.
  const puppeteer = await import("puppeteer-core");

  const browser = await puppeteer.default.launch({
    headless: "new",
    executablePath: BROWSER_PATH || undefined,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    );

    await page.goto(TARGET_URL, { waitUntil: "domcontentloaded", timeout: 90_000 });

    // Try opening reviews UI if available.
    const reviewTriggerSelectors = [
      'a[href*="/customers/reviews"]',
      'button[aria-label*="reviews" i]',
      'a[aria-label*="reviews" i]',
      'span:has-text("reviews")',
    ];

    for (const sel of reviewTriggerSelectors.slice(0, 3)) {
      const el = await page.$(sel);
      if (el) {
        await el.click().catch(() => {});
        await page.waitForTimeout(2000);
        break;
      }
    }

    // Scroll the likely reviews panel to load more entries.
    await page.evaluate(async () => {
      const candidates = Array.from(document.querySelectorAll('div[role="main"], div[aria-label*="reviews" i], div[jscontroller]'));
      const container = candidates.find((c) => c.scrollHeight > c.clientHeight) || document.scrollingElement || document.body;

      for (let i = 0; i < 15; i++) {
        container.scrollTop = container.scrollHeight;
        await new Promise((r) => setTimeout(r, 1200));
      }
    });

    const reviews = await page.evaluate(() => {
      const text = (el) => (el?.textContent || "").trim();

      // Heuristic selectors used in Google review cards (can change over time).
      const cards = Array.from(document.querySelectorAll('div[data-review-id], div[jscontroller][data-hveid]')).slice(0, 200);

      const parsed = cards
        .map((card) => {
          const author = text(card.querySelector('a[role="link"], span[class*="X5PpBb"], div[class*="d4r55"]'));
          const ratingLabel = card.querySelector('[aria-label*="star" i]')?.getAttribute("aria-label") || "";
          const ratingMatch = ratingLabel.match(/([0-5](?:\\.[0-9])?)/);
          const rating = ratingMatch ? Number(ratingMatch[1]) : null;
          const reviewText = text(
            card.querySelector('span[class*="wiI7pd"], span[jsname], div[class*="MyEned"], div[class*="Jtu6Td"]')
          );
          const time = text(card.querySelector('span[class*="rsqaWe"], span[class*="xRkPPb"], div[class*="DU9Pgb"]'));

          if (!author && !reviewText) return null;

          return {
            author: author || null,
            rating,
            time: time || null,
            text: reviewText || null,
          };
        })
        .filter(Boolean);

      // Deduplicate by author+text in case selectors catch nested cards.
      const seen = new Set();
      const deduped = [];
      for (const r of parsed) {
        const k = `${r.author || ""}::${r.text || ""}`;
        if (seen.has(k)) continue;
        seen.add(k);
        deduped.push(r);
      }

      return deduped;
    });

    const payload = {
      sourceUrl: TARGET_URL,
      fetchedAt: new Date().toISOString(),
      reviewCount: reviews.length,
      reviews,
      note:
        "Best-effort scraping from public Google UI. Selectors may break anytime, and legal/ToS constraints may apply.",
    };

    const outPath = path.resolve(process.cwd(), OUTPUT_FILE);
    await fs.writeFile(outPath, JSON.stringify(payload, null, 2), "utf8");

    console.log(`Saved ${reviews.length} reviews to ${outPath}`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error("Failed to scrape reviews:", err);
  process.exit(1);
});

