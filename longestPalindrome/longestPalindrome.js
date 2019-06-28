/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var obj = {}
  function produceAllStrings(string, start = null) {
    for (let i = 0; i <= string.length; i++) {
      obj[string.slice(0,i)] = true;
    } 
    if (string.slice(0, -1) !== ""){
      produceAllStrings(string.slice(-1 * (string.length - 1)));
    }
  }
  function reverseString(string) {
    return string.split("").reverse().join("")
  }
  function findPalindromes(obj) {
    for (let key in obj) {
      if (key !== reverseString(key)) {
        delete obj[key];
      }
    }
  }
  produceAllStrings(string)
  findPalindromes(obj)
  return Object.keys(obj).sort((b,a) => (a.length - b.length))[0];
};

