/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var overallMidValue = Math.floor(array.length/2);
  
  function recurse(array) {
    var midpoint = Math.floor(array.length/2);
    
    if (target === array[midpoint]) {
      return overallMidValue;
    } 
    if (target < array[midpoint]) {
      overallMidValue = overallMidValue - Math.round(array.slice(0,midpoint).length/2);
      return recurse(array.slice(0, midpoint))
    }
    if (target > array[midpoint]) {
      overallMidValue = midpoint + Math.floor(array.slice(midpoint, array.length).length / 2);
      return recurse(array.slice(midpoint, array.length))
    }
  }
  return recurse(array);
  
};
var index = binarySearch([1, 2, 3, 4, 5], 5)
