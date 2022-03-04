/**
 * 实现双向链表
 * https://www.cnblogs.com/AhuntSun-blog/p/12441095.html
 */
function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
}
function DoubleLinklist() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinklist.prototype.append = function(data) {
    let newNode = new Node(data);
    console.log('this.length', this.length, this.length === 0);
    if (this.length === 0) {
        this.tail = newNode;
        this.head = newNode;
    } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length += 1;
}

DoubleLinklist.prototype.toString = function() {
    return this.backwardString();
}
DoubleLinklist.prototype.forwardString = function() {
    let current = this.tail;
    let resultString = '';
    while (current) {
        resultString += current.data + '--';
        current = current.prev;
    }
    return resultString;
}
DoubleLinklist.prototype.backwardString = function() {
    let current = this.head;
    let resultString = '';
    while (current) {
        resultString += current.data + '--';
        current = current.next;
    }
    return resultString;
}
DoubleLinklist.prototype.insert = function(position, data) {
    if (position < 0 || position === null || position === undefined || position > this.length) return false; 
    let newNode = new Node(data);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        if (position === 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else if (position === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let current = this.head;
            let index = 0;
            // while (index++ < postion) {
            //     current = current.next;
            // }
            // O(n) 时间复杂度，插入。
            // while (index < position) {
            //     current = current.next;
            //     index++;
            // }
            while (true) {
                if (index >= position) {
                    break;
                }
                index++;
                current = current.next;
            }
            // current.prev 变成 data
            // current.next 不变
            // data.prev 变成 current.prev
            // data.next 变成 current
            // 当前的前一个的后一个为 data
            newNode.next = current;
            newNode.prev = current.prev;
            // current.next = current.next;
            current.prev.next = newNode; // ????
            current.prev = newNode
        }
    }
    this.length += 1;
    return true;
}
DoubleLinklist.prototype.get = function() {
    // 
}

let list = new DoubleLinklist();
list.append('aaa');

list.append('bbb');
list.append('ccc');
console.log('list', list);
console.log('forwardString', list.forwardString());
console.log('backwardString', list.backwardString());
console.log('toString', list.toString());

// list.insert(0, '你懂的')
list.insert(0, '插入链表的第一个元素');
list.insert(0, '在链表首部插入元素');
list.insert(1, '在链表中间插入元素');
list.insert(3, '在链表尾部插入元素');

console.log('list', list);
