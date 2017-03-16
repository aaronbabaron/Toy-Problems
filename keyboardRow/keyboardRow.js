/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
  var rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  return words.filter(function(word) {
    var row;

    for (var i = 0; i < rows.length; ++i) {
      if (rows[i].indexOf(word.charAt(0).toLowerCase()) !== -1) {
        row = rows[i];
        break;
      }
    }

    for (var j = 1; j < word.length; ++j) {
      console.log(row, word);
      if (row.indexOf(word.charAt(j).toLowerCase()) === -1) {
        return false;
      }
    }

    return true;
  });
};

