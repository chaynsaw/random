/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  function convertToGrid(mapStr) {
    var overallMatrix = [];
    mapStr.split('\n').forEach(elem => overallMatrix.push(elem.split('')));
    return overallMatrix;
  }
  var grid = convertToGrid(mapStr);
  var counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') {
        markIslandSeen(i,j);
        counter++;
      }
    }
  }
  return counter;
  function markIslandSeen(i,j) {
    console.log(i,j)
    grid[i][j] = 1;
    
    if (grid[i + 1]) {
      // console.log('i + 1')
      if (grid[i + 1][j] === '0') {
        markIslandSeen(i + 1, j)
      } 
    }
    if (grid[i - 1]) {
      // console.log('i - 1')
      if (grid[i - 1][j] === '0') {
        markIslandSeen(i - 1, j)
      }
    }
    if (grid[i][j + 1]) {
      // console.log('j + 1')
      if (grid[i][j + 1] === '0') {
        markIslandSeen(i, j + 1)
      }
    }
    if (grid[i][j - 1]) {
      // console.log('j + 1')
      if (grid[i][j - 1] === '0') {
        markIslandSeen(i, j - 1)
      }
    }
  }
  // Your code here.
}

// countIslands('.0...\n.00..\n....0')