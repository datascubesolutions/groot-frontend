const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

/** Canonical favicon artwork: dark rounded tile + mark (not the legacy white-only SVG). */
const SOURCE_SVG = path.join(
  __dirname,
  "public/svg/image2vector (2).svg",
);
const PUBLIC_SVG_FAVICON = path.join(__dirname, "public/svg/favicon.svg");

async function generate() {
  if (!fs.existsSync(SOURCE_SVG)) {
    throw new Error(`Missing favicon source: ${SOURCE_SVG}`);
  }

  const svgBuffer = fs.readFileSync(SOURCE_SVG);

  // SVG includes #111827 card; pad to square with same tone for crisp scaling.
  const background = await sharp(svgBuffer, { density: 300 })
    .resize(512, 512, { fit: "contain", background: "#111827" })
    .png()
    .toBuffer();

  const sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "favicon-96x96.png": 96,
    "apple-touch-icon.png": 180,
    "favicon-512x512.png": 512,
  };

  const publicDir = path.join(__dirname, "public");
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(background).resize(size, size).png().toFile(path.join(publicDir, filename));
    console.log(`Generated ${filename}`);
  }

  const pngToIco = (await import("png-to-ico")).default;
  const icoBuffer = await pngToIco([
    path.join(publicDir, "favicon-16x16.png"),
    path.join(publicDir, "favicon-32x32.png"),
    path.join(publicDir, "favicon-48x48.png"),
  ]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("Generated favicon.ico (16+32+48)");

  fs.copyFileSync(SOURCE_SVG, PUBLIC_SVG_FAVICON);
  console.log("Synced public/svg/favicon.svg from image2vector (2).svg");
}

generate().catch(console.error);
