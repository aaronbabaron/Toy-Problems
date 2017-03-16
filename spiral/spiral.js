/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
  var startedEvenRows = matrix.length % 2;
  var startedEvenCols = matrix.length > 0 ? matrix[0].length % 2 : 0;
  var iterated = [];

  while (matrix.length > 0) {
    var lastLen = matrix[0].length;

    if (startedEvenRows === matrix.length % 2) {
      for (var i = 0; i < lastLen; ++i) {
        iterated.push(matrix[0][i]);
      }

      matrix.shift();
    } else {
      for (var i = lastLen - 1; i >= 0; --i) {
        iterated.push(matrix[matrix.length - 1][i]);
      }

      matrix.pop();
    }

    if (startedEvenCols === lastLen % 2) {
      for (var i = 0; i < matrix.length; ++i) {
        if (matrix[i].length > 0) {
          iterated.push(matrix[i][lastLen - 1]); 
        }
        matrix[i].pop();
      }

    } else {
      for (var i = matrix.length - 1; i >= 0; --i) {
        if (matrix[i].length > 0) {
          iterated.push(matrix[i][0]); 
        }

        matrix[i].shift();
      }
    }
  }

  return iterated;
};
