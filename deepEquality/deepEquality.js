/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var sortedApple, sortedOrange
  if (typeof apple !== 'object') {
    sortedApple = JSON.stringify(apple);
  } 
  if (typeof orange !== 'object') {
    sortedOrange = JSON.stringify(orange);
  }
  return sortedApple === sortedOrange;
  function findAndSort(value) {
    if (typeof value !== 'object') {
      return value;
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
      for (var key in obj) {
        return findAndSort(value);
      }
    } else if (typeof value === 'object' && Array.isArray(value)) {
      for (let i = 0; i < array.length; i++) {
        return findAndSort(value);
      }
    }
  }
  function objSort(obj){
    // create an object keys array
    
    let objKeys = Object.keys(obj)
    let sortedObj = {};
    // sort that object keys array
    objKeys.sort();
    // for every key in that object array, assign the value on the original object
    for (let i=0; i < objKeys.length; i++) {
      sortedObj[objKeys[i]] = obj[objKeys[i]];
    }
    // return thie newobj
    return sortedObj;
  }
};
