var getArray = require('./string-to-array.js');

function findSurface(input) {
  var result = 0;

  var inputArray = getArray(input, /\r?\n/);

  if (inputArray[inputArray.length - 1] == '') {
    inputArray.splice(-1, 1);
  }

  inputArray.forEach(function(element) {
    var dimensions = getArray(element, 'x');
    dimensions.sort(function(a, b) {
      return a - b
    });
    result += dimensions[0] * dimensions[1] + 2 * dimensions[0] * dimensions[1] + 2 * dimensions[0] * dimensions[2] + 2 * dimensions[1] * dimensions[2];
  });

  return result;
}

function findLength(input) {
  var result = 0;

  var inputArray = getArray(input, /\r?\n/);

  if (inputArray[inputArray.length - 1] == '') {
    inputArray.splice(-1, 1);
  }

  inputArray.forEach(function(element) {
    var dimensions = getArray(element, 'x');
    dimensions.sort(function(a, b) {
      return a - b
    });
    result += 2 * dimensions[0] + 2 * dimensions[1] + dimensions[0] * dimensions[1] * dimensions[2];
  });

  return result;
}

module.exports.findSurface = findSurface;
module.exports.findLength = findLength;
