const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF() {
  const doc = new PDFDocument({ size: 'A4', layout: 'landscape', margin: 0 });
  const stream = fs.createWriteStream('./public/ai-roadmap.pdf');
  doc.pipe(stream);

  // Background
  doc.rect(0, 0, 842, 595).fill('#ffffff');

  // Let's try embedding an image that might be the roadmap they want
  const possiblePaths = [
    './public/images/services/strategic_roadmap_planning.png',
    './public/images/fabric/process_timeline.png'
  ];

  let embedded = false;
  for (const path of possiblePaths) {
    if (fs.existsSync(path)) {
      doc.image(path, 0, 0, {
        fit: [842, 595],
        align: 'center',
        valign: 'center'
      });
      embedded = true;
      break;
    }
  }

  if (!embedded) {
    doc.fillColor('#000').fontSize(24).text('Roadmap Image not found.', 50, 50);
  }

  doc.end();

  stream.on('finish', () => {
    console.log('PDF generated successfully at public/ai-roadmap.pdf');
  });
}

generatePDF();
