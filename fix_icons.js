const fs = require('fs');
const path = require('path');

const dir = '/home/hexylon/Datascube/groot/groot-frontend/src/app/microsoft';
const products = ['fabric', 'power-bi', 'copilot', 'ai-foundry', 'purview', 'azure', 'devops'];

products.forEach(product => {
  const filePath = path.join(dir, product, 'page.js');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace `icon: ComponentName` with `icon: <ComponentName className="w-7 h-7" />`
  // We match `icon: ` followed by a capitalized word, which is not followed by `<` or `"`
  // Lookahead/lookbehind to be safe
  content = content.replace(/icon:\s*([A-Z][a-zA-Z0-9]+)\s*(?=[,}])/g, 'icon: <$1 className="w-7 h-7" />');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${product}/page.js`);
});
