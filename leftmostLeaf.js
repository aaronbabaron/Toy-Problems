/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  var bottomRow = [];
  var deepestCount = 0;

  var inner = (node, depth) => {
    if (depth > deepestCount) {
      deepestCount = depth;
      if (bottomRow.length > 0) bottomRow = [];
    }

    if (!node.left && !node.right && deepestCount >= depth) {
      bottomRow.push(node);
    }

    if (node.left) inner(node.left, depth + 1);
    if (node.right) inner(node.right, depth + 1);
  };

  inner(root, 0);

  return bottomRow[0].val;
};
