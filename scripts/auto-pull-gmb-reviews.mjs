import { spawn } from "node:child_process";

const DEFAULT_INTERVAL_MINUTES = 360; // 6 hours
const MIN_SAFE_INTERVAL_MINUTES = 60; // 1 hour
const rawInterval = Number(process.env.GMB_PULL_INTERVAL_MINUTES || process.argv[2] || DEFAULT_INTERVAL_MINUTES);
const INTERVAL_MINUTES = Math.max(rawInterval, MIN_SAFE_INTERVAL_MINUTES);

if (!Number.isFinite(rawInterval) || rawInterval <= 0) {
  console.error("Invalid interval. Use minutes > 0.");
  process.exit(1);
}

function runOnce() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["scripts/fetch-gmb-reviews-api.mjs"],
      { stdio: "inherit", shell: false }
    );

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`fetch script failed with code ${code}`));
    });
  });
}

async function loop() {
  const everyMs = INTERVAL_MINUTES * 60 * 1000;
  console.log(
    `Auto-pull started. Interval: ${INTERVAL_MINUTES} minute(s). ` +
      `(minimum enforced: ${MIN_SAFE_INTERVAL_MINUTES} minute(s))`
  );

  while (true) {
    const started = new Date().toISOString();
    console.log(`[${started}] Pulling latest Google reviews...`);

    try {
      await runOnce();
    } catch (err) {
      console.error("Auto-pull run failed:", err.message || err);
    }

    await new Promise((r) => setTimeout(r, everyMs));
  }
}

loop().catch((err) => {
  console.error(err);
  process.exit(1);
});

