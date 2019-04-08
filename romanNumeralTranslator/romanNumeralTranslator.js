
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
  function subtract(first, second) {
    return second - first;
  }
  function add(first, second) {
    return first + second;
  }
  if (typeof romanNumeral !== 'string') {
    return 'null'
  } else {
    let arr = romanNumeral.toUpperCase().split('')
    let sum = 0;
    if (arr.length % 2 === 0) {
      for(let i = 0; i < arr.length; i+=2) {
        if (DIGIT_VALUES[arr[0]] < DIGIT_VALUES[arr[i+1]]) {
          sum += (subtract(DIGIT_VALUES[arr[i]], DIGIT_VALUES[arr[i+1]]))
        } else {
          sum += (add(DIGIT_VALUES[arr[i]], DIGIT_VALUES[arr[i+1]]))
        }
      }
      return sum;
    }
    if (arr.length % 2 !== 0) {
      if (DIGIT_VALUES[arr[arr.length -1]] > DIGIT_VALUES[arr[arr.length - 2]]){
        for(let i = arr.length; i > 0; i-=2) {
          if (DIGIT_VALUES[arr[i-1]] < DIGIT_VALUES[arr[i]]) {
            sum += (subtract(DIGIT_VALUES[arr[i-1]], DIGIT_VALUES[arr[i]]))
          } else {
            sum += (add(DIGIT_VALUES[arr[i-1]], DIGIT_VALUES[arr[i]]))
          }
        }
        sum += DIGIT_VALUES[arr[0]];
        return sum;
        }
      } else {
        for(let i = 0; i < arr.length - 1; i+=2) {
          if (DIGIT_VALUES[arr[i]] < DIGIT_VALUES[arr[i+1]]) {
            sum += (subtract(DIGIT_VALUES[arr[i]], DIGIT_VALUES[arr[i+1]]))
          } else {
            sum += (add(DIGIT_VALUES[arr[i]], DIGIT_VALUES[arr[i+1]]))
          }
        }
        sum += DIGIT_VALUES[arr[arr.length - 1]];
        return sum;
      }
    }
  };
translateRomanNumeral('VIVIV')