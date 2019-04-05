/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    matrix = [[1,2,3],[4,5,6],[7,8,9]]
 */

var spiralTraversal = function(matrix) {
  var traversed = {};
  var direction = 'right';
  function traverse (i = 0, j = 0) {
    if (direction === 'right') {
      while (j < matrix[0].length && traversed[JSON.stringify(`${i},${j}`)] === undefined) {
        traversed[JSON.stringify(`${i}${j}`)] = true;
        j ++
      }
      j --;
      console.log(traversed);
      direction = 'down';
      while (i < matrix.length && traversed[JSON.stringify(`${i},${j}`)] === undefined) {
        traversed[JSON.stringify(`${i}${j}`)] = true;
        i ++;
      }
      i --;
      console.log(traversed);
      
      direction = 'left';
      while (j > 0 && traversed[JSON.stringify(`${i},${j}`)] === undefined) {
        traversed[JSON.stringify(`${i}${j}`)] = true;
        j --;
      }
      j ++;
      console.log(traversed);
    }
  }
  traverse()
  // TODO: Implement me!
};
