function ListNode(val) {
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

 */

var l0 = new ListNode(2);
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

var searchMinValueNode = function(root) {
	var sum = 0;
	var dep = 0;
	var treeNode = {};
	console.log('root', root && root.val);
	const result = minDeep(root, sum, dep, treeNode);
	console.log('treeNode[result]', treeNode[result]);
	return result;
};

var minDeep = function(root, sum, dep, treeNode) {
	if (root === null) {
		return Infinity;
	}
	sum += root.val;
	dep++;
	if (root.left === null && root.right === null) {
		if (!treeNode[sum]) {
			treeNode[sum] = Infinity;
		}
		treeNode[sum] = Math.min(dep, treeNode[sum]);
		console.log('sum', sum, 'root.val', root.val, 'dep', dep, 'treeNode', treeNode);
		return sum;
	}
	const result = Math.min(minDeep(root.left, sum, dep, treeNode), minDeep(root.right, sum, dep, treeNode));
	return result;
}

console.log('begin!');
// searchMinValueNode(l0)
console.log(searchMinValueNode(l0));

