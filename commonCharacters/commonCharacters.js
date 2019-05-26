/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


 // i two strings, presume both are equal length
 // o string containing the common strings
 // c none
 // e none

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  // put each character from string1 in an object
  // put each character from string2 in an object
  // loop through each character in string1object and push the character to an array, if it was present in string2 as well
  // join that array to a string
  // return it. 
  // let argsArray = [];
  function characterize(string) {
    let splitstring = string.split('')
    let obj = {}
    for (let key of splitstring) {
      obj[key] = true;
    }
    return obj;
  } 
  // for (let key of arguments) {
  //   argsArray(characterize(key))
  // }
  // function compare() {
  //   let commonArray = [];
  //   for (let key in characterize(arguments[0])) {
  //     if (characterize(arguments[0])[key] === characterize(arguments[1])[key]) {
  //       commonArray.push(key);
  //     }
  //   }
  //   return commonArray;
  // }

  let string1obj = {};
  let string2obj = {};
  let commonArray = [];
  string1obj = characterize(string1);
  string2obj = characterize(string2);

  
  for (let key in string1obj) {
    if(string1obj[key] && string2obj[key]) {
      commonArray.push(key)
    }
  }
  return commonArray;
};



