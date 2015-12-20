function readFile(filePath){
  var fs = require('fs')
  return fs.readFileSync('./test/day-2.input').toString();
}

module.exports = readFile;
