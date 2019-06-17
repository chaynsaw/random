/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  if (Number.isInteger(number)) {
    return `${Number}/1`
  } else if (number < 1) {
    var totalDigits = number.toString().length - 2;
    var topDigit = Math.floor(number * Math.pow(10,totalDigits));
    var bottomDigit = Math.pow(10,totalDigits);
    var results = reduce(topDigit, bottomDigit)
    return `${results[0]}/${results[1]}`
  } else if (number > 1) {
    var bottomDigit = Math.pow(10,number.toString().split('.')[1].length)
    var topDigit = parseInt(number.toString().split('.')[0]) * bottomDigit + parseInt(number.toString().split('.')[1])
    var results = reduce(topDigit, bottomDigit)
    return `${results[0]}/${results[1]}`
  }
  function reduce(num1, num2) {
    if (Number.isInteger(num1 / 5) && Number.isInteger(num2 / 5)) {
      return reduce(num1 / 5, num2 / 5)
    }
    if (Number.isInteger(num1 / 3) && Number.isInteger(num2 / 3)) {
      return reduce(num1 / 3, num2 / 3)
    }
    if (Number.isInteger(num1 / 2) && Number.isInteger(num2 / 2)) {
      return reduce(num1 / 2, num2 / 2)
    }
    return [num1, num2]
  }
};
