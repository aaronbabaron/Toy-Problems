/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//class TreeNode {
//  constructor(val) {
//    this.val = val;
//    this.left = this.right = null;
//  }
//}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var serial = [];
  var queue = [];

  if (root) {
    queue.push(root);
    serial.push(root.val);
  }
  
  while (queue.length > 0) {
    var node = queue.shift();

    if (node.left) {
      serial.push(node.left.val);
      queue.push(node.left);
    } else {
      serial.push(null);
    }

    if (node.right) {
      serial.push(node.right.val);
      queue.push(node.right);
    } else {
      serial.push(null);
    }
  }

  while (serial[serial.length - 1] === null) {
    serial.pop();
  }

  //  console.log(JSON.stringify(serial));
  return JSON.stringify(serial);
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  var children = JSON.parse(data);
  var serial = [];

  if (children.length === 0) return children;

  var root = new TreeNode(children.shift());
  serial.push(root);

  while (children.length > 0) {
    var node = serial.shift();

    var left = children.shift();
    var right = children.shift();

    if (left || left === 0) {
      left = new TreeNode(left);
      node.left = left;
      serial.push(left);
    }

    if (right || right === 0) {
      right = new TreeNode(right);
      node.right = right;
      serial.push(right);
    }
  }

  console.log(root);
  return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
//var root = new TreeNode(1);
//root.left = new TreeNode(2);
//deserialize(serialize(root))
