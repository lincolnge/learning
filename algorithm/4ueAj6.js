/**
 * https://leetcode.cn/problems/4ueAj6/
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */
function Node (val, next) {
  this.val = val;
  this.next = next;
};

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
const insert = function (head, insertVal) {
  let nodeHead = head;
  if (!nodeHead) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }
  if (nodeHead.next === head) {
    nodeHead.next = new Node(insertVal, nodeHead);
    return head;
  }
  while (true) {
    // 前面的数大于后面的数，说明是末尾
    if (nodeHead.val > nodeHead.next.val) {
      if (insertVal >= nodeHead.val || insertVal <= nodeHead.next.val) {
        const nodeHeadNext = nodeHead.next;
        nodeHead.next = new Node(insertVal, nodeHeadNext);
        break;
      }
    }

    if (nodeHead.val < insertVal && nodeHead.next.val >= insertVal) {
      const nodeHeadNext = nodeHead.next;
      nodeHead.next = new Node(insertVal, nodeHeadNext);
      break;
    }
    // 环形链表的末端
    if (nodeHead.next === head) {
      const nodeHeadNext = nodeHead.next;
      nodeHead.next = new Node(insertVal, nodeHeadNext);
      break;
    }
    nodeHead = nodeHead.next;
    if (nodeHead === head) {
      break;
    }
  }
  return head;
};
