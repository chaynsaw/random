/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
"735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  function checkHorizontal(board) {
    var rows = board.split('\n');
    for (let i = 0; i < rows.length; i++) {
      if (checkNumbers(rows[i]) === false) {
        return false;
      } 
    }
    return true;
  }
  function checkGrids(board) {
    var arr = board.split('\n')
    var grids = {};
    grids[1] = arr[0].slice(0,3) + arr[1].slice(0,3) + arr[2].slice(0,3) 
    grids[4] = arr[0].slice(3,6) + arr[1].slice(3,6) + arr[2].slice(3,6) 
    grids[5] = arr[0].slice(6,9) + arr[1].slice(6,9) + arr[2].slice(6,9)
    grids[2] = arr[3].slice(0,3) + arr[4].slice(0,3) + arr[5].slice(0,3) 
    grids[6] = arr[3].slice(3,6) + arr[4].slice(3,6) + arr[5].slice(3,6) 
    grids[7] = arr[3].slice(6,9) + arr[4].slice(6,9) + arr[5].slice(6,9)
    grids[3] = arr[6].slice(0,3) + arr[7].slice(0,3) + arr[8].slice(0,3) 
    grids[8] = arr[6].slice(3,6) + arr[7].slice(3,6) + arr[8].slice(3,6) 
    grids[9] = arr[6].slice(6,9) + arr[7].slice(6,9) + arr[8].slice(6,9) 
    for (let key in grids){
      if (JSON.stringify(grids[key].split('').sort()) !== '["1","2","3","4","5","6","7","8","9"]') {
        return false;
      }
    }
    return true;

  }
  function checkVertical(board) {
    var arr = board.split('\n');
    for (var i =0; i< arr.length; i++) {
      var obj = {};
      for (var j = 0; j < arr.length; j++) {
        obj[arr[i][j]] = true;
      }
      if(JSON.stringify(Object.keys(obj)) !== '["1","2","3","4","5","6","7","8","9"]') {
        return false;
      } 
    }
    return true;
  }
  function checkNumbers(string) {
    var arr = string.split('')
    arr.sort()
    if (JSON.stringify(arr) === '["1","2","3","4","5","6","7","8","9"]') {
      return true;
    } else {
      return false;
    }
  }
  if (checkVertical(board) && checkHorizontal(board) && checkGrids(board) === true) {
    return 'solved';
  } else {
    return 'invalid'; 
  }
}
