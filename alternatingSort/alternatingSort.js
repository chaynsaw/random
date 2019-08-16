
alternatingSort([1,2,3,4,5,6,7]) // [1, 7, 2, 6, 3, 5, 4]
// 0, 6, 1, 5, 2, 4, 3
alternatingSort([1,2,3,4,5,6]) // [1, 7, 2, 6, 3, 5]

var alternatingSort = (arr) => {
  let arr2 = [];
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    arr2.push(arr[i])
    if (i !== j) {
      arr2.push(arr[j]);
    }
  }
  return arr2;
}
alternatingSort([1,2,3,4,5,6,7]) // [1, 7, 2, 6, 3, 5, 4]
// 0, 6, 1, 5, 2, 4, 3
alternatingSort([1,2,3,4,5,6]) // [1, 7, 2, 6, 3, 5]