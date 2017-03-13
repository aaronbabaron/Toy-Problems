/**
 * @param {character[][]} board
 * @return {number}
 *
 * You receive a valid board, made of only battleships or empty slots.
 *
 * Battleships can only be placed horizontally or vertically. In other words, 
 * they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), 
 * where N can be of any size.
 *
 * At least one horizontal or vertical cell separates between two 
 * battleships - there are no adjacent battleships.
 *
 */
var countBattleships = function(board) {
  var numBattleships = 0;

  for (var i = 0; i < board.length; ++i) {
    for (var j = 0; j < board[i].length; ++j) {
      if (board[i][j] === 'X') {
        ++numBattleships;

        if (j + 1 < board[i].length && board[i][j + 1] === 'X') {
          for (var k = j; k < board[i].length; ++k) {
            if (board[i][k] === '.') break;
            board[i][k] = '.';
          }
        } else if (i + 1 < board.length && board[i + 1][j] === 'X') {
          for (var k = i; k < board.length; ++k) {
            if (board[k][j] === '.') break;
            board[k][j] = '.';
          }
        }
      }
    }
  }

  return numBattleships;
};
