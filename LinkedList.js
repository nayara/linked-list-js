class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let currentElement = this.head;

    for (let i = 0; i < index; i++) {
      currentElement = currentElement.next;
    }

    return currentElement;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = new Node(value, prev.next);

    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;

    this.length--;
  }

  print() {
    let output = ` `;
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

LinkedList.fromValues = function (...values) {
  const linkedList = new LinkedList();

  for (let index = values.length - 1; index >= 0; index--) {
    linkedList.insertAtHead(values[index]);
  }

  return linkedList;
};

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
