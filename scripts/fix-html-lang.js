const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// Map of locale to HTML lang attribute value
const langMap = {
  'en': 'en',
  'es': 'es',
  'zh': 'zh',
  'qu': 'qu',
};

// Candidate directories containing prerendered HTML, depending on Next output mode.
// - output: 'export'      -> out/
// - output: 'standalone'  -> .next/server/app/  (used by OpenNext / Cloudflare)
const candidateDirs = [
  path.join(rootDir, 'out'),
  path.join(rootDir, '.next', 'server', 'app'),
];

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

function fixHtmlLang(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Determine locale from file path
  let lang = 'en';
  for (const [locale, htmlLang] of Object.entries(langMap)) {
    const localePattern = path.sep + locale + path.sep;
    const localePatternAlt = path.sep + locale + '.html';
    if (filePath.includes(localePattern) || filePath.endsWith(localePatternAlt)) {
      lang = htmlLang;
      break;
    }
  }

  // Replace lang attribute on <html> tag
  const htmlTagRegex = /<html[^>]*>/i;
  const htmlTagMatch = content.match(htmlTagRegex);

  if (htmlTagMatch) {
    let htmlTag = htmlTagMatch[0];

    // Check if lang attribute exists
    if (/lang\s*=/i.test(htmlTag)) {
      // Replace existing lang attribute
      htmlTag = htmlTag.replace(/lang\s*=\s*["'][^"']*["']/i, `lang="${lang}"`);
    } else {
      // Add lang attribute before the closing >
      htmlTag = htmlTag.replace(/>\s*$/, ` lang="${lang}">`);
    }

    content = content.replace(htmlTagRegex, htmlTag);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Fixed lang="${lang}" in ${path.relative(rootDir, filePath)}`);
  }
}

console.log('Fixing HTML lang attributes...');
for (const dir of candidateDirs) {
  if (fs.existsSync(dir)) {
    walkDir(dir, fixHtmlLang);
  }
}
console.log('Done!');
