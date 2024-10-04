function generateEmptySudoku() {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(new Array(9).fill(0));
    }
    return board;
  }
  
  function printBoard(board) {
    for (let i = 0; i < 9; i++) {
      console.log(board[i].join(' '));
    }
  }
  function isValidInRow(board, row, num) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === num) {
        return false;
      }
    }
    return true;
  }
  
  function isValidInCol(board, col, num) {
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === num) {
        return false;
      }
    }
    return true;
  }
  function isValidInBox(board, startRow, startCol, num) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[startRow + row][startCol + col] === num) {
          return false;
        }
      }
    }
    return true;
  }
  function isValidSudoku(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const num = board[row][col];
        if (num !== 0) {
          if (!isValidInRow(board, row, num) ||
              !isValidInCol(board, col, num) ||
              !isValidInBox(board, row - row % 3, col - col % 3, num)) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  const sudokuBoard =  [[5, 3, 4, 6, 7, 8, 9, 1, 2],[6, 7, 2, 1, 9, 5, 3, 4, 8],[1, 9, 8, 3, 4, 2, 5, 6, 7],[8, 5, 9, 7, 6, 1, 4, 2, 3],[4, 2, 6, 8, 5, 3, 7, 9, 1],[7, 1, 3, 9, 2, 4, 8, 5, 6],[9, 6, 1, 5, 3, 7, 2, 8, 4],[2, 8, 7, 4, 1, 9, 6, 3, 5],[3, 4, 5, 2, 8, 6, 1, 7, 9]]
  //const sudokuBoard = generateEmptySudoku();
  
  console.log('Sudoku Board:');
  printBoard(sudokuBoard);
  
  const isValid = isValidSudoku(sudokuBoard);
  console.log('Is the Sudoku board valid? ', isValid);
    
    