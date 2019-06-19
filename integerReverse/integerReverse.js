/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  // Get the amount of digits that are in this number
  var digitCounter = 0;
  function getTotalDigits(number) {
    if (number / 10 <= 1) {
      return digitCounter;
    } else {
      digitCounter += 1;
      getTotalDigits(number / 10);
    }
  }
  var digit = 0;
  function getFirstDigit(number) {
    if (number === 0) {
      return digit;
    } else {
      number -= 1;
      digit += 1;
      getFirstDigit(number);
    }
  }
}
