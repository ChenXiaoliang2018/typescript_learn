class ListNode {
  constructor(public value: number, public next?: ListNode | null) {
    this.value = value;
    this.next = next === undefined ? null : next;
  }
}

class Linklist_queue {
  constructor(
    private front?: ListNode | null,
    private rear?: ListNode | null,
    private size: number = 0
  ) {
    this.front = front;
    this.rear = rear;
  }

  getSize() {
    return this.size;
  }

  getPeek() {
    if (!this.size) {
      throw new Error("队列为空！");
    }
    return this.front;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(node: ListNode): void {
    if (!this.size) {
      this.front = this.rear = node;
    } else {
      if (this.rear && this.rear.next) {
        this.rear.next = node;
        this.rear = node;

        this.size++;
      }
    }
  }

  pop(): ListNode {
    if (!this.size) throw new Error("队列为空");
    this.front = this.front?.next as ListNode;
    this.size--;
    return this.front;
  }

  toArray() {
    let node = this.front;
    let res = new Array(this.size);
    for (let i = 0; i < res.length; i++) {
      res[i] = node?.value;
      node = node?.next as ListNode | null;
    }

    return res;
  }
}

let n0 = new ListNode(1);
let n1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(5);
let n4 = new ListNode(4);
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

let q1 = new Linklist_queue(n0, n1, 2);

// console.log(q1.getPeek());
// console.log(q1.getSize());

q1.push(n2);
q1.push(n3);
q1.push(n4);

// console.log(q1.getSize());
// console.log(q1.toArray());

q1.pop();
// console.log(q1.getSize());
// console.log(q1.toArray());

q1.pop();
console.log(q1.getSize());
console.log(q1.toArray());
