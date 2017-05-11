/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
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

// 递归写法
// var maxDepth = function(root) {
//   if (root === null) {
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// 尾递归写法
// var maxDepth = function(root) {
//   return maxDepthUnit(root, 0);
// };
//
// var maxDepthUnit = function(root, depth) {
//   if (root === null) {
//     return depth;
//   }
//   if (maxDepthUnit(root.right, 1 + depth) > maxDepthUnit(root.left, 1 + depth))
//     return maxDepthUnit(root.right, 1 + depth);
//   return maxDepthUnit(root.left, 1 + depth);
// }

// 非递归写法
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  var node = root;
  var stack = [];
  var depthStack = [];

  var maxDth = 0;
  var depth = 1;

  stack.push(node);
  depthStack.push(depth);
  while (stack.length !== 0) {
    node = stack.pop();
    depth = depthStack.pop();
    // console.log(node.val, depth, maxDth);
    if (maxDth < depth) {
      maxDth = depth;
    }
    if (node.right !== null) {
      stack.push(node.right);
      depthStack.push(depth + 1);
    }
    if (node.left !== null) {
      stack.push(node.left);
      depthStack.push(depth + 1);
    }
  }
  return maxDth;
}

/**
 * 广度优先算法（Breadth First Search）
 * 先进先出
 */

function BFS(node) {
  var que = [];
  que.push(node);
  while (que.length !== 0) {
    node = que.shift()
    console.log(node.val, que);
    if (node.left) que.push(node.left);
    if (node.right) que.push(node.right);
  }
}

/**
 * 深度优先算法（Depth First Search））
 * 后进先出
 */

function DFS(node) {
  var stack = [];
  stack.push(node);
  while (stack.length !== 0) {
    node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
// sample2
/*
if (node) {
  stack.push(node);
  node = node.left;
} else {
  node = stack.pop();
  node = node.right;
}
*/
/**
 * tree：

        2
       / \
      /   \
     /     \
    1       3
   / \     / \
  0   7   9   1
 /   / \     / \
2   1   0   8   8
       /
      7

 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var rootTree = new TreeNode(2);
rootTree.left = new TreeNode(1);
rootTree.left.left = new TreeNode(0);
rootTree.left.right = new TreeNode(7);
rootTree.left.right.left = new TreeNode(1);
rootTree.left.right.right = new TreeNode(0);
rootTree.left.right.right.left = new TreeNode(7);
rootTree.left.left.left = new TreeNode(2);
rootTree.right = new TreeNode(3);
rootTree.right.left = new TreeNode(9);
rootTree.right.right = new TreeNode(1);
rootTree.right.right.left = new TreeNode(8);
rootTree.right.right.right = new TreeNode(8);

// var rootTree = {
//   val: 2,
//   left: {
//     val: 1,
//     left: {
//       val: 0,
//       left: null,
//       right: {
//         val: 1,
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: {
//         val: 31,
//         left: null,
//         right: {
//           val: 32,
//           left: null,
//           right: null,
//         },
//       },
//     },
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null,
//   }
// }


console.log('maxDepth(rootTree)', maxDepth(rootTree));
