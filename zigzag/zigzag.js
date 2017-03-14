/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 * P     I     N
 * A   L S   I G
 * Y A   H R
 * P     I
 *
 * P       H
 * A     S I
 * Y   I   R 
 * P L     I G
 * A       N
 *
 * P   A   H   N
 * A P L A I H G
 * N   Y   I   R
 */

var convertEfficient = function(s, numRows) {
  if (numRows === 1) return s;

  var str = '';
  var colDistance = numRows * 2 - 2;
  

  for (var i = 0; i < numRows; ++i) {
    for (var colWidth = i; colWidth < s.length; colWidth += colDistance) { 
      str += s[colWidth];  
      
      // add diagonals only if not first or last row
      var offset = (numRows - i - 1) * 2;
      if (i !== 0 && i !== numRows - 1 && colWidth + offset < s.length) {
        str += s[colWidth + offset];
      } 
    }
  }

  return str;
};

var convert = function(s, numRows) {
  // go to bottom while adding letters
  // when you hit bottom start zigzagging til you reach top
  // then repeat til string is empty
  if (numRows === 1) return s;

  var arr = [];
  for (var i = 0; i < numRows; ++i) {
    arr.push([]); 
  }
  
  var depth = 0;
  var isDescending = true;

  for (var i = 0; i < s.length; ++i) {

    if (isDescending) {
      arr[depth].push(s[i]); 

      if (depth === numRows - 1) {
        isDescending = false;
      }
      else ++depth;
    } else {
      --depth;

      if (depth === 0) {
        isDescending = true;
        --i;
      }
      else arr[depth].push(s[i]);
    }
  }

  var combined = [];

  for (var i = 0; i < arr.length; ++i) {
    combined = combined.concat(arr[i]);
  }

  return combined.join('');
};


