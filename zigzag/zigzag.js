/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
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


