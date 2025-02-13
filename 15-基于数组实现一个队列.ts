class Array_Queue {
  constructor(
    private nums: number[],
    private front: number,
    private size: number,
    public capacity: number
  ) {
    this.nums = new Array(capacity);
    this.size = 0;
    this.front = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  getPeek() {
    if (!this.size) throw new Error("队列为空！");
    return this.nums[this.front];
  }

  push(num: number): void {
    if (this.size === this.capacity) throw new Error("队列已满！");
    const rear = (this.front + this.size) % this.capacity;

    this.nums[rear] = num;
    this.size++;
  }

  pop(): number {
    if (!this.size) throw new Error("队列为空！");

    const num = this.getPeek();

    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return num;
  }

  toArray(): number[] {
    const res = new Array(this.size);
    for (let i = 0, j = this.front; i < this.size; i++, j++) {
      res[i] = this.nums[j % this.capacity];
    }

    return res;
  }
}

let q1 = new Array_Queue([], 0, 0, 5);

q1.push(1);
q1.push(3);
q1.push(2);
q1.push(5);
q1.push(4);

console.log(q1.toArray());

q1.pop();
console.log(q1.toArray());

q1.pop();
console.log(q1.toArray(), q1.getSize());
q1.pop();
console.log(q1.toArray(), q1.getSize());
q1.pop();
console.log(q1.toArray(), q1.getSize());
q1.pop();
console.log(q1.toArray(), q1.getSize());
