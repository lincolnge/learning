/**
 * 创建一个树的基本结构。
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

function TreeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const rootTree = new TreeNode(2);
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
