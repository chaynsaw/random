/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // helper function anagrimfinder(starting index)?
  // if i === starting index, skip
  // otherwise push 
  // but also recurse. 
  resultArray = [];
  wordArray = [];
  stringArray = string.split('')
  function letterAdder(avoidLetter) {
    wordArray.push(avoidLetter);
    while (wordArray.length !== stringArray.length) {
      i=0;
      if (!wordArray.includes(stringArray[i])){
        wordArray.push(stringArray[i]);
      }
      i++;  
    }
    return wordArray;
  }
  function reverseAdder(avoidLetter) {
    wordArray.push(avoidLetter);
    while (wordArray.length !== stringArray.length) {
      i=wordArray.length - 1;
      if (!wordArray.includes(stringArray[i])){
        wordArray.push(stringArray[i]);
      }
      i--;
    }
    return wordArray;
  }
  for (let i = 0; i < string.length; i++) {
    resultArray.push(letterAdder(stringArray[i]))
    resultArray.push(reverseAdder(stringArray[i]))
  }
  return resultArray;
  // Your code here.
};
