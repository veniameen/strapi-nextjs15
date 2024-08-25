const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const publicDir = path.join(__dirname, '..', 'server', 'public');

fs.readdirSync(publicDir).forEach((file) => {
  if (file !== 'uploads') {
    rimraf.sync(path.join(publicDir, file));
  }
});