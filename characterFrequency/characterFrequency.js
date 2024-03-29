/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var characterCounter = (string) => {
    let obj = {};
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] += 1;
      }
    }
    return obj;
  }
  var sortByValue = (obj) => {
    return Object.entries(obj).sort((a,b) => b[1] - a[1])
  }
  var sortByChar = (array) => {
    return array.sort((a,b) => {
      if (a[1] === b[1]) {
        if (a[0] < b[0]) {
          return -1
        }
      }
    })
  }
  var result = sortByChar(sortByValue(characterCounter(string)))
  return result;
};
