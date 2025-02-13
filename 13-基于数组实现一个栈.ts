class Arr_Stack {
  constructor(public stack: number[]) {
    this.stack = stack;
  }

  getSize() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getPeek(): number {
    if (this.isEmpty()) {
      throw new Error("empty stack");
    }
    return this.stack[this.getSize() - 1];
  }

  push(num: number): number {
    this.stack.push(num);
    return this.getSize();
  }

  pop(): number | undefined {
    if (this.isEmpty()) {
      throw new Error("empty stack");
    }
    return this.stack.pop();
  }

  toArray(): number[] {
    return this.stack;
  }
}

let s1 = new Arr_Stack([]);

s1.push(1);
s1.push(3);
s1.push(2);
s1.push(5);
s1.push(4);

console.log(s1.getSize());
console.log(s1.isEmpty());
console.log(s1.getPeek());

s1.pop();
console.log(s1.toArray());
