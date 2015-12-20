
function getVisitedHouses(inputArray){
  var x = 0;
  var y = 0;

  var visitedHouses = {};
  visitedHouses[getKey(x, y)] = true;

  var movement = {
    '^': function() {
      y++;
    },
    'v': function() {
      y--;
    },
    '>': function() {
      x++
    },
    '<': function() {
      x--
    },
  };

  inputArray.forEach(function(element) {
    if (element == '^' || element == 'v' || element == '>' || element == '<') {
      movement[element]();
      visitedHouses[getKey(x, y)] = true;
    }
  });

  return visitedHouses;
}

function getKey(x, y) {
  var key = x.toString() + ':' +  y.toString();
  return key;
}

function countHouses(input) {
  var inputArray = input.split('');

  return Object.keys(getVisitedHouses(inputArray)).length;
}

function countSantaAndRoboSantaHouses(input) {
  var inputArray = input.split('');
  var santaMovements = inputArray.filter((element, index) => index % 2 === 0);
  var roboSantaMovements = inputArray.filter((element, index) => index % 2 === 1);

  var santaVisitedHouses = getVisitedHouses(santaMovements);
  var roboSantaVisitedHouses = getVisitedHouses(roboSantaMovements);
  var visitedHouses = santaVisitedHouses;

  Object.keys(roboSantaVisitedHouses).forEach(function(element) {
      visitedHouses[element] = true;
  });

  return Object.keys(visitedHouses).length;
}

module.exports.countHouses = countHouses;
module.exports.countSantaAndRoboSantaHouses = countSantaAndRoboSantaHouses;
