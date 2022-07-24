function ListNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**

 * tree：

        2
       / \
      /   \
     /     \
    1       3
   / \     / \
  3   7   6   1
 /   / \     / \
5   1   0   8   8
       /
      7

 * 搜索权重最小，叶子最短的一支。
 * 在这颗树上就是 2 - 3 - 6 这支
 */

const l0 = new ListNode(2);
l0.left = new ListNode(1);
l0.left.left = new ListNode(3);
l0.left.right = new ListNode(7);
l0.left.right.left = new ListNode(1);
l0.left.right.right = new ListNode(0);
l0.left.right.right.left = new ListNode(7);
l0.left.left.left = new ListNode(5);
l0.right = new ListNode(3);
l0.right.left = new ListNode(6);
l0.right.right = new ListNode(1);
l0.right.right.left = new ListNode(8);
l0.right.right.right = new ListNode(8);

const sumStack = [];
const sumStackList = {};
const treeNode = {};

const searchMinValueNode = function (root) {
  const dep = 0;
  const sum = 0;

  // console.log('root', root && root.val);
  const result = minDeep(root, sum, dep);
  console.log('dep', treeNode[result]);
  // console.log('end sumStack', sumStack);
  console.log('tree-leave', sumStackList[result]);
  console.log('result', result);
  return result;
};

const minDeep = function (root, sum, dep) {
  if (root === null) {
    return Infinity;
  }
  sum += root.val;
  sumStack.splice(dep, sumStack.length - 1, root.val);
  dep++;
  if (root.left === null && root.right === null) {
    if (!treeNode[sum]) {
      treeNode[sum] = Infinity;
    }
    treeNode[sum] = Math.min(dep, treeNode[sum]);
    // var keyLength = sumStackList.length;
    sumStackList[sum] = sumStack.slice(0);
    // console.log('sumStack', sumStack, 'sumStackList', sumStackList, 'keyLength', keyLength);
    // console.log('sum', sum, 'root.val', root.val, 'dep', dep, 'treeNode', treeNode);
    return sum;
  }
  return Math.min(minDeep(root.left, sum, dep), minDeep(root.right, sum, dep));
};

console.log('begin!');
searchMinValueNode(l0);
console.log('end!');
// console.log('result', searchMinValueNode(l0));
