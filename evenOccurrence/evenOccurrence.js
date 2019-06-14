  /*
  * Find the first item that occurs an even number of times in an array.
  * Remember to handle multiple even-occurrence items and return the first one. 
  * Return null if there are no even-occurrence items.
  */

  /*
  * example usage:
  * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
  * console.log(onlyEven); //  4
  */
  // I arr
  // O return first item that occurs an even number of times. 
  // C Multiple even-occurrence returns the first one
  // E IF  none, return null
var evenOccurrence = function(arr) {
  // Your code here.
  var output = [];
  var counter = 0;
  var findOccurrences = function (element, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i]) {
        counter++
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    if(findOccurrences(arr[i], arr) % 2 === 0){
      return arr[i];
    } else {
      counter = 0;;
    }
  }
  
  return null;
};
