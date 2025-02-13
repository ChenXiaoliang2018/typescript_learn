class ListNode {
  constructor(public value: number, public next?: ListNode | null) {
    this.value = value;
    this.next = next === undefined ? null : next;
  }
}

class Linkedlist_Stack {
  constructor(public stackPeek: ListNode, public size: number = 1) {
    this.stackPeek = stackPeek;
    this.size = size;
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

  getPeek() {
    if (!this.stackPeek) {
      throw new Error("empty stack");
    }
    return this.stackPeek;
  }

  push(node: ListNode): number {
    node.next = this.stackPeek;

    this.stackPeek = node;
    this.size++;

    return this.size;
  }

  pop() {
    const Peek = this.getPeek();
    if (!this.stackPeek) {
      throw new Error("empty stack");
    }

    this.stackPeek = this.stackPeek.next as ListNode;
    this.size--;

    return Peek;
  }

  toArray() {
    let node = this.stackPeek;
    let result = new Array(this.size);
    for (let i = result.length - 1; i > 0; i--) {
      result[i] = node?.value;
      node = node?.next as ListNode;
    }

    return result;
  }
}

const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);

n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n3.next = null;

const L1 = new Linkedlist_Stack(n0, 1);

// console.log(L1.stackPeek, L1.size);

L1.push(n1);
L1.push(n2);
L1.push(n3);
L1.push(n4);

// console.log(L1.stackPeek, L1.size);
// console.log(L1.toArray());

L1.pop();

// console.log(L1.stackPeek, L1.size);
// console.log(L1.toArray());
