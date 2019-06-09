// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  function findAllPossible(str){
    var obj = {};
    for(let i = 0; i < str.length; i++) {
      obj[str.substr(i)] = true;
      obj[str.substr(0,i)] = true;
    }
    return obj;
  }
  if (str1 === str2) {
    return 0; 
  } else if (str1.includes(str2)){
    return str1.length - str2.length;
  } else if (str2.includes(str1)) {
    return str2.length - str1.length;
  } else {
    arr1 = str1.split('');
    arr2 = str2.split('');
    var counter = 0; 
    for (let i = 0; i < str2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        counter ++; 
      }
    }
    return counter;
  }
}
