//Reverse Function Practice
var array = [];
function printReverse(array){
  var newArray =[];
  for(var i=0;i<=array.length-1;i++){
    var j = array.length-(i+1);
    if(j>=0){
      newArray[j] = array[i];
    }
  }
  console.log(newArray);
}
printReverse([1,2,3,4]);

//isUniform() Practice
//save the first arrayvalue and compare it with the rest
var array = [];
function isUniform(array[]){
  var firstValue = array[0];
  quit = true;
  for(var i=1;i<array.length;i++){
    if(firstValue!==array[i]){
      quit = false;
      break;
    }
    continue;
  }

  return quit;
}

isUniform([1,1,1,1]);
isUniform([2,1,2,1]);
isUniform(["a","b","a"]);

//sumArray() accepts an array of numbers and returns the sum of all
//number in the array

var array=[];
function sumArray(array){
var result = 0;
for(var i=0;i<array.length;i++){
  result+=array[i];
}
console.log(result);
}

sumArray([1,2,3]);


//accepts numbers
//return the max number in that array

var array = [];
function max(array){
  var maxNumber = array[0];
  for (var i =1;i<array.length;i++){
    if(maxNumber < array[i]){
      maxNumber = array[i];
    }
  }
  console.log(maxNumber);
}


max([1,2,3]); //3
