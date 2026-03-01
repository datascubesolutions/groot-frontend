const fs = require('fs');
const path = require('path');

const heroes = {
  fabric: 'FabricHero',
  'power-bi': 'PowerBIHero',
  copilot: 'CopilotHero',
  'ai-foundry': 'AIFoundryHero',
  purview: 'PurviewHero',
  azure: 'AzureHero',
  devops: 'DevOpsHero'
};

const pagesDir = '/home/hexylon/Datascube/groot/groot-frontend/src/app/microsoft';

Object.entries(heroes).forEach(([folder, componentName]) => {
  const pageFile = path.join(pagesDir, folder, 'page.js');
  let content = fs.readFileSync(pageFile, 'utf8');

  // Replace import
  content = content.replace(
    /import \{ MicrosoftHero \} from "@\/components\/sections\/microsoft\/MicrosoftHero";/,
    "import { " + componentName + " } from \"@/components/sections/microsoft/" + componentName + "\";"
  );

  // Replace component
  content = content.replace(
    /<MicrosoftHero[\s\S]*?\/>/,
    "<" + componentName + " />"
  );

  fs.writeFileSync(pageFile, content);
  console.log('Updated ' + folder);
});
