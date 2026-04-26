const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generate() {
  const svgPath = path.join(__dirname, "public/svg/favicon.svg");
  const svgBuffer = fs.readFileSync(svgPath);

  // The SVG is pure white but might have no bounds or bad bounds.
  // sharp handles SVGs nicely, but we can force a density to render it high-res.
  const renderedSvg = await sharp(svgBuffer, { density: 300 })
    .resize(400, 400, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const background = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: "#0c1214",
    },
  })
    .composite([
      {
        input: renderedSvg,
        gravity: "center",
      },
    ])
    .png()
    .toBuffer();

  // Google Search favicon guidance: use a square icon; 48px+ multiples help discovery.
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
}

generate().catch(console.error);
