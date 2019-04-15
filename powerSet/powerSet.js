/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

function powerSet(str) {
	// break str into array of chars
	let strArr = str.split('');
	// have a results array beginning with one item, probably ''
	let results = [[]];
	// loop through the characters and add them to the results.
	// loop through results and then add one character... 
	// sort the subsets? 
	for (let i = 0; i < strArr.length; i++) {
		let end = strArr.length;
		for (let j = 0; j < end; j++) {
			results.push(results[j].concat(strArr[i]))
		}
	}
	return results;
}
