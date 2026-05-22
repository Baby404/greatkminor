import fs from "node:fs/promises";
import path from "node:path";

const API_KEY = process.argv[2] || process.env.GOOGLE_MAPS_API_KEY;
const BUSINESS_NAME = process.argv[3] || process.env.GMB_BUSINESS_NAME || "Great Kminor";
const OUTPUT_FILE = process.argv[4] || process.env.GMB_OUTPUT_FILE || "gmb-reviews-api.json";

if (!API_KEY) {
  console.error("Missing API key. Usage: node scripts/fetch-gmb-reviews-api.mjs <API_KEY> [BUSINESS_NAME] [OUTPUT_FILE]");
  process.exit(1);
}

async function fetchJson(url) {
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`);
  }
  return json;
}

async function run() {
  const findUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  findUrl.searchParams.set("input", BUSINESS_NAME);
  findUrl.searchParams.set("inputtype", "textquery");
  findUrl.searchParams.set("fields", "place_id,name,formatted_address");
  findUrl.searchParams.set("key", API_KEY);

  const findData = await fetchJson(findUrl.toString());
  if (findData.status !== "OK" || !findData.candidates?.length) {
    throw new Error(`Find Place failed: ${findData.status} ${findData.error_message || "No candidates"}`);
  }

  const place = findData.candidates[0];

  const detailsUrl = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  detailsUrl.searchParams.set("place_id", place.place_id);
  detailsUrl.searchParams.set(
    "fields",
    "name,formatted_address,rating,user_ratings_total,url,review,reviews"
  );
  detailsUrl.searchParams.set("reviews_sort", "newest");
  detailsUrl.searchParams.set("key", API_KEY);

  const detailsData = await fetchJson(detailsUrl.toString());
  if (detailsData.status !== "OK" || !detailsData.result) {
    throw new Error(`Place Details failed: ${detailsData.status} ${detailsData.error_message || "No result"}`);
  }

  const result = detailsData.result;
  const reviews = (result.reviews || []).map((r) => ({
    author_name: r.author_name || null,
    rating: r.rating ?? null,
    relative_time_description: r.relative_time_description || null,
    time: r.time || null,
    text: r.text || null,
    language: r.language || null,
    author_url: r.author_url || null,
  }));

  const payload = {
    fetchedAt: new Date().toISOString(),
    source: "Google Places API",
    query: BUSINESS_NAME,
    place: {
      place_id: place.place_id,
      name: result.name || place.name || null,
      formatted_address: result.formatted_address || place.formatted_address || null,
      google_maps_url: result.url || null,
      rating: result.rating ?? null,
      user_ratings_total: result.user_ratings_total ?? null,
    },
    reviewCount: reviews.length,
    reviews,
    note: "Places API typically returns a limited subset of reviews, not full review history.",
  };

  const outPath = path.resolve(process.cwd(), OUTPUT_FILE);
  await fs.writeFile(outPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Saved ${reviews.length} API reviews to ${outPath}`);
}

run().catch((err) => {
  console.error("Failed to fetch Places API reviews:", err.message || err);
  process.exit(1);
});

