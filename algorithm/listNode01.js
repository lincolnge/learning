/**
 * 链表练习题。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);

  let b = 0;
  let m;
  let n;
  let a;
  while (l1 || l2 || b) {
    if (l1) {
      m = l1.val;
    } else {
      m = 0;
    }
    if (l2) {
      n = l2.val;
    } else {
      n = 0;
    }
    a = (m + n + b) % 10;
    const newNode = new ListNode(a);
    b = Math.floor((m + n + b) / 10);
    if (l3.next == null) {
      l3.next = newNode;
    } else {
      let c = l3.next;
      while (c.next != null) { c = c.next; }
      c.next = newNode;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return l3.next;
};

// [2, 4, 3]
// [5, 6, 4]
// var l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// var l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

const res = addTwoNumbers(l1, l2);
console.log('res', res);
