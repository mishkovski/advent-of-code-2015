var crypto = require('crypto');

function findNumber(input, leadingZerosString){
  var i = 0;
  while(true){
    var value = input + i.toString();
    var hash = crypto.createHash('md5').update(value).digest('hex');
    if(hash.substring(0,leadingZerosString.length) == leadingZerosString){
      break;
    }
    i++;
  }

  return i;
}

module.exports.findNumber = findNumber;
