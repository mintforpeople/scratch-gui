const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

fs.mkdirSync(buildDir, { recursive: true });
fs.writeFileSync(path.join(buildDir, '.nojekyll'), '');
fs.writeFileSync(path.join(buildDir, 'CNAME'), 'scratch.theroboboproject.com\n');