/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // iterate through
  var obj = {};
  var arrayified = string.split('');
  var resultChar;
  for (let i = 0; i < arrayified.length; i++) {
    if (!obj[arrayified[i]]) {
      obj[arrayified[i]] = [1, i]
    } else {
      obj[arrayified[i]][0]++;
    }
  }
  var lowestRepeat = obj[arrayified[0]][0]
  for (var key in obj) {
    if (obj[key][0] === 1){
      return key;
    } else {
      if (obj[key][0] < lowestRepeat) {
        resultChar = key;
      }
    }
  }
  return resultChar;
  // assign a character a count of 1
  // i only want 1 char, so maybe log its index too
  // lowest index, lowest count is my char. 
};

