const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 0, left: 0, right: 0 }, // Full bleed, we'll handle margins manually
  bufferPages: true
});

const outputPath = path.join(__dirname, 'public', 'ai-roadmap.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Paths
const logoPath = path.join(__dirname, 'public', 'svg', 'Groot final logo.png');

// Colors
const colors = {
  primary: '#22c55e', // Emerald 500
  primaryDark: '#15803d',
  forest: '#064e3b',  // Emerald 900
  dark: '#0f172a',    // Slate 900
  darker: '#020617',  // Slate 950
  light: '#f8fafc',   // Slate 50
  gray: '#64748b',    // Slate 500
  lightGray: '#e2e8f0',
  white: '#ffffff'
};

const PAGE_WIDTH = doc.page.width;
const PAGE_HEIGHT = doc.page.height;
const MARGIN = 50;

// --- Helper Functions ---
function drawGrid(yStart, height, opacity = 0.05, strokeColor = colors.primary) {
  doc.strokeOpacity(opacity);
  doc.lineWidth(1);
  const gridSize = 20;
  // Horizontals
  for (let y = yStart; y < yStart + height; y += gridSize) {
    doc.moveTo(0, y).lineTo(PAGE_WIDTH, y).stroke(strokeColor);
  }
  // Verticals
  for (let x = 0; x < PAGE_WIDTH; x += gridSize) {
    doc.moveTo(x, yStart).lineTo(x, yStart + height).stroke(strokeColor);
  }
  doc.strokeOpacity(1);
}

function drawTechNodes(xOffset, yOffset) {
  doc.strokeOpacity(0.3).lineWidth(1);
  const points = [
    [xOffset, yOffset], [xOffset + 40, yOffset - 30], 
    [xOffset + 90, yOffset - 10], [xOffset + 130, yOffset - 50],
    [xOffset + 180, yOffset]
  ];
  
  doc.moveTo(points[0][0], points[0][1]);
  for(let i = 1; i < points.length; i++) {
    doc.lineTo(points[i][0], points[i][1]);
  }
  doc.stroke(colors.primary);
  
  points.forEach(p => {
    doc.circle(p[0], p[1], 3).fill(colors.white);
  });
  doc.strokeOpacity(1);
}

// --- COVER PAGE ---
doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(colors.darker);
drawGrid(0, PAGE_HEIGHT, 0.08, colors.primary);

// Large abstract blobs
doc.circle(PAGE_WIDTH, 0, 350).fillOpacity(0.05).fill(colors.primary);
doc.circle(0, PAGE_HEIGHT, 250).fillOpacity(0.08).fill(colors.primaryDark);
doc.fillOpacity(1);

// Add Logo
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, MARGIN, MARGIN, { width: 140 });
} else {
  doc.fill(colors.primary).fontSize(20).font('Helvetica-Bold').text('GROOT ANALYTICS', MARGIN, MARGIN, { letterSpacing: 2 });
}

// Title
doc.fill(colors.primary).fontSize(16).font('Helvetica-Bold').text('STRATEGIC BLUEPRINT', MARGIN, 250, { letterSpacing: 4 });
doc.fill(colors.white).fontSize(48).font('Helvetica-Bold').text('Enterprise AI', MARGIN, 280);
doc.fill(colors.white).fontSize(48).font('Helvetica-Bold').text('& Data Roadmap', MARGIN, 330);
doc.fill(colors.primary).fontSize(48).text('2026', MARGIN, 380);

doc.fill(colors.gray).fontSize(16).font('Helvetica').text('A comprehensive, phased approach to transitioning from fragmented data silos to a production-grade AI ecosystem on the Microsoft Data Stack.', MARGIN, 460, { width: 450, lineGap: 8 });

// Decorative bottom line
doc.moveTo(MARGIN, PAGE_HEIGHT - 100).lineTo(MARGIN + 150, PAGE_HEIGHT - 100).lineWidth(4).stroke(colors.primary);
doc.fill(colors.white).fontSize(10).font('Helvetica-Bold').text('CONFIDENTIAL & PROPRIETARY', MARGIN, PAGE_HEIGHT - 80, { letterSpacing: 1 });
doc.fill(colors.gray).fontSize(10).font('Helvetica').text('Prepared by Groot Analytics Engineering Team', MARGIN, PAGE_HEIGHT - 65);

// --- CONTENT PAGES HELPER ---
function addContentPage(phaseNum, phaseName, title, subtitle, mainText, listItems, techStack) {
  doc.addPage();
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(colors.light);
  
  // Header banner
  doc.rect(0, 0, PAGE_WIDTH, 140).fill(colors.darker);
  drawGrid(0, 140, 0.1, colors.white);
  
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, MARGIN, 30, { width: 100 });
  }
  
  doc.fill(colors.primary).fontSize(12).font('Helvetica-Bold').text(`PHASE ${phaseNum}  //  ${phaseName.toUpperCase()}`, MARGIN, 75, { letterSpacing: 2 });
  doc.fill(colors.white).fontSize(26).font('Helvetica-Bold').text(title, MARGIN, 95);

  // Main Content Area
  doc.fill(colors.primaryDark).fontSize(18).font('Helvetica-Bold').text(subtitle, MARGIN, 180);
  doc.fill(colors.dark).fontSize(12).font('Helvetica').text(mainText, MARGIN, 210, { width: PAGE_WIDTH - (MARGIN * 2), lineGap: 6 });

  // Detail Box (Left side)
  doc.roundedRect(MARGIN, 320, 240, 220, 8).fill(colors.white).lineWidth(1).strokeOpacity(0.2).stroke(colors.forest);
  doc.fillOpacity(1).fill(colors.darker).fontSize(14).font('Helvetica-Bold').text('Core Deliverables', MARGIN + 20, 340);
  
  let yList = 370;
  listItems.forEach(item => {
    doc.circle(MARGIN + 25, yList + 4, 3).fill(colors.primary);
    doc.fill(colors.dark).fontSize(11).font('Helvetica').text(item, MARGIN + 40, yList, { width: 180, lineGap: 4 });
    yList += 35; // spacing
  });

  // Detail Box (Right side - Architecture Diagram Mockup)
  doc.roundedRect(MARGIN + 260, 320, 235, 220, 8).fill(colors.darker);
  drawGrid(320, 220, 0.1, colors.primary);
  doc.fill(colors.primary).fontSize(12).font('Helvetica-Bold').text('Target Architecture', MARGIN + 280, 340);
  
  // Draw mini architecture diagram
  doc.roundedRect(MARGIN + 280, 370, 60, 40, 4).fill(colors.forest);
  doc.fill(colors.white).fontSize(9).font('Helvetica-Bold').text('Data Source', MARGIN + 285, 385);
  
  doc.moveTo(MARGIN + 345, 390).lineTo(MARGIN + 375, 390).lineWidth(2).stroke(colors.primary);
  
  doc.roundedRect(MARGIN + 380, 370, 90, 40, 4).fill(colors.primaryDark);
  doc.fill(colors.white).fontSize(9).text('ETL / Pipeline', MARGIN + 395, 385);

  doc.moveTo(MARGIN + 425, 415).lineTo(MARGIN + 425, 445).lineWidth(2).stroke(colors.primary);

  doc.roundedRect(MARGIN + 380, 450, 90, 40, 4).fill('#0f766e'); // Teal
  doc.fill(colors.white).fontSize(9).text(techStack, MARGIN + 390, 465, { width: 70, align: 'center' });

  // Footer Section with Timeline/Graphics
  const yFooter = 600;
  doc.rect(0, yFooter, PAGE_WIDTH, PAGE_HEIGHT - yFooter).fill(colors.lightGray);
  
  // Progress Timeline
  doc.fill(colors.dark).fontSize(12).font('Helvetica-Bold').text('Roadmap Progress', MARGIN, yFooter + 25);
  
  const timelineY = yFooter + 70;
  doc.moveTo(MARGIN, timelineY).lineTo(PAGE_WIDTH - MARGIN, timelineY).lineWidth(4).stroke('#cbd5e1'); // Background line
  doc.moveTo(MARGIN, timelineY).lineTo(MARGIN + ((PAGE_WIDTH - (MARGIN*2)) * (phaseNum / 3)), timelineY).lineWidth(4).stroke(colors.primary); // Progress line
  
  for(let i=1; i<=3; i++) {
    const xPos = MARGIN + ((PAGE_WIDTH - (MARGIN*2)) * ((i-1) / 2));
    const isActive = i <= phaseNum;
    doc.circle(xPos, timelineY, 8).fill(isActive ? colors.primary : '#94a3b8');
    doc.fill(isActive ? colors.darker : colors.gray).fontSize(10).font('Helvetica-Bold').text(`Phase ${i}`, xPos - 20, timelineY + 15);
  }

  // Page numbering and small logo at bottom
  doc.fill(colors.gray).fontSize(9).font('Helvetica').text(`Groot Analytics | Page 0${phaseNum + 1}`, MARGIN, PAGE_HEIGHT - 30);
}

// --- GENERATE CONTENT PAGES ---

addContentPage(
  1, 
  'Foundation', 
  'Fabric-Ready Data Architecture',
  'Establishing the Single Source of Truth',
  'You cannot build reliable AI on top of fragmented, ungoverned data. Phase 1 focuses entirely on establishing a unified architecture. We eliminate data silos by migrating legacy systems into a centralized data lakehouse, applying strict governance policies, and automating ingestion pipelines so data is always fresh, secure, and ready for advanced modeling.',
  [
    'Unified OneLake / Databricks Setup',
    'Data Governance via Purview',
    'Automated ELT/ETL Pipelines',
    'Security & Compliance Guardrails'
  ],
  'OneLake & Purview'
);

addContentPage(
  2, 
  'Intelligence', 
  'Decision Intelligence Engine',
  'Empowering Business Leadership',
  'Before advanced AI, the business needs absolute trust in its core metrics. In Phase 2, we build an interactive, semantic layer on top of your unified data. This layer democratizes data access without compromising security, delivering executive-level Power BI dashboards that update in real-time and provide actionable business intelligence.',
  [
    'Enterprise Semantic Models',
    'Executive Power BI Dashboards',
    'Self-Service Analytics Rollout',
    'Standardization of KPIs'
  ],
  'Power BI & Semantic Layer'
);

addContentPage(
  3, 
  'AI Foundry', 
  'Production-Grade AI & Copilots',
  'The Final Frontier of Automation',
  'With a rock-solid foundation and trusted metrics, we deploy machine learning models and generative AI. In Phase 3, we build custom Copilots and LLM integrations that converse with your proprietary data. We implement strict MLOps practices to ensure AI deployments are reliable, scalable, and actively driving revenue while reducing operational costs.',
  [
    'Custom Azure OpenAI Solutions',
    'M365 & Fabric Copilot Integration',
    'End-to-End MLOps Pipelines',
    'Predictive Analytics Forecasting'
  ],
  'Azure OpenAI & MLOps'
);

// --- CALL TO ACTION PAGE ---
doc.addPage();
doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(colors.darker);
drawGrid(0, PAGE_HEIGHT, 0.05, colors.primary);

doc.circle(PAGE_WIDTH/2, PAGE_HEIGHT/2, 200).fillOpacity(0.05).fill(colors.primary);
doc.fillOpacity(1);

if (fs.existsSync(logoPath)) {
  doc.image(logoPath, (PAGE_WIDTH - 200) / 2, 120, { width: 200 });
}

doc.fill(colors.primary).fontSize(36).font('Helvetica-Bold').text('Ready to Build?', 0, 300, { align: 'center' });
doc.fill(colors.white).fontSize(16).font('Helvetica').text('Reach out to the Groot Analytics engineering team to schedule your personalized, deep-dive architecture review and begin Phase 1.', 100, 360, { align: 'center', width: PAGE_WIDTH - 200, lineGap: 8 });

// Contact Box
doc.roundedRect((PAGE_WIDTH - 300) / 2, 450, 300, 100, 8).fill(colors.forest).lineWidth(1).stroke(colors.primary);
doc.fill(colors.white).fontSize(14).font('Helvetica-Bold').text('Contact Us', 0, 475, { align: 'center' });
doc.fill(colors.primary).fontSize(12).font('Helvetica').text('hello@grootanalytics.com', 0, 500, { align: 'center' });
doc.fill(colors.white).fontSize(12).font('Helvetica').text('www.grootanalytics.com', 0, 520, { align: 'center' });

doc.end();

console.log("Advanced PDF generated successfully at public/ai-roadmap.pdf");
