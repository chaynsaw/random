/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

// I array, O sorted array, C, E none
var quicksort = function(array) {
    // Pick the midpoint
    // return its index and value
    // rest of the items, array[>midpoint] will go into secondhalf
    // array[<midpoint> will go into firsthalf
    // and do this over and over? 
		// Then combine the two arrays, the pivot into a sorted array
		
	// base case
	if (array.length === 3 && array[0] <= array[1] && array[1] <= array[2]) {
		return array;
	}
	if (array.length === 1) {
		return array;
	}
	if (array.length === 2) {
		return array;
	}
	if (array.length === 0) {
		return array;
	}
	let pivot = array[Math.floor(array.length/2) - 1];
	let secondHalf = [];
	let firstHalf = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > pivot) {
			secondHalf.push(array[i]);
		}
		if (array[i] < pivot) {
			firstHalf.push(array[i]);
		}
		if (array[i] === pivot && i !== (Math.floor(array.length/2)- 1)) {
			firstHalf.push(array[i]);
		}
	}
	firstHalf.push(pivot);
	quicksort(firstHalf);
	return quicksort(firstHalf).concat(quicksort(secondHalf));
	
};
// quicksort([13434,1112,43,52,1,4,3,2,1,3,4,5,13,43])