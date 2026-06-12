// checkFileCase.js
const fs = require('fs');
const path = require('path');

function checkCase(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkCase(fullPath);
    } else {
      const ext = path.extname(file);
      if (ext.toLowerCase() !== ext) {
        console.warn(
          `⚠️ Case mismatch: ${file} (should be ${file.toLowerCase()})`,
        );
      }
    }
  });
}

// Run on your public/images folder (adjust path as needed)
checkCase(path.join(__dirname, 'public/images'));
