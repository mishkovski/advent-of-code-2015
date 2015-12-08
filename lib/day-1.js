function findFloor(input){
  var floor = 0;

  for(i=0; i<input.length; i++){
    if(input[i] == '('){
      floor++;
    }
    else{
      floor--;
    }
  }

  return floor;
}

function findPosition(input){
  var floor = 0;

  for(i=0; i<input.length; i++){
    if(input[i] == '('){
      floor++;
    }
    else{
      floor--;
    }
    if(floor == -1){
      return i + 1;
    }
  }
}

module.exports.findFloor = findFloor;
module.exports.findPosition = findPosition;
