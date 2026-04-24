const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const svgPath = path.join(__dirname, 'public/svg/favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // The SVG is pure white but might have no bounds or bad bounds.
  // sharp handles SVGs nicely, but we can force a density to render it high-res.
  const renderedSvg = await sharp(svgBuffer, { density: 300 })
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const background = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: '#0c1214'
    }
  }).composite([
    {
      input: renderedSvg,
      gravity: 'center'
    }
  ]).png().toBuffer();

  // Save the various sizes
  const sizes = {
    'apple-touch-icon.png': 180,
    'favicon-32x32.png': 32,
    'favicon-16x16.png': 16,
    'favicon-512x512.png': 512
  };

  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(background)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, 'public', filename));
    console.log(`Generated ${filename}`);
  }
}

generate().catch(console.error);
