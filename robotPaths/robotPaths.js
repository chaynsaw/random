/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board = new makeBoard(n), i, j) {
  // var newPath = new makeBoard(n);
  var counter = 0; 
  function findPath(i = 0, j = 0) {
    if (i === n - 1 && j === n - 1) {
      counter += 1; 
    }
    newPath.togglePiece(i,j);
    if (i + 1< n && !newPath.hasBeenVisited(i + 1,j)) {
      findPath(i + 1, j);
    } else if (i - 1 > -1 && !newPath.hasBeenVisited(i - 1,j)) {
      findPath(i - 1, j);
    } else if (j + 1 < n && !newPath.hasBeenVisited(i,j + 1)) {
      findPath(i, j + 1);
    } else if (j - 1 > -1 && !newPath.hasBeenVisited(i,j - 1)) {
      findPath(i, j - 1);
    }
  }
};

