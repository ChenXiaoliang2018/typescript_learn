class Heap {
  public heap: number[];
  public size: number;
  public compare: (x: number, y: number) => number;
  constructor(compareFunc = (x: number, y: number) => x - y, heap = []) {
    this.heap = heap;
    this.size = heap.length;
    this.compare = compareFunc;
    this.buildHeap();
  }

  leftChild(pos: number) {
    return pos * 2 + 1;
  }
  rightChild(pos: number) {
    return pos * 2 + 2;
  }
  parent_pos(pos: number) {
    return Math.floor(pos - 1 / 2);
  }
  isLeaf(pos: number) {
    return pos >= this.parent_pos(this.size - 1) + 1 && pos < this.size;
  }

  compareItems(n1: number, n2: number) {
    return this.compare(n1, n2) > 0;
  }

  swim(pos: number) {
    let parent_pos = this.parent_pos(pos);
    while (pos && this.compareItems(parent_pos, pos)) {
      [this.heap[pos], this.heap[parent_pos]] = [
        this.heap[parent_pos],
        this.heap[pos],
      ];
      pos = parent_pos;
      parent_pos = this.parent_pos(pos);
    }
  }

  sink(pos: number) {
    if (this.isLeaf(pos)) return;
    let left = this.leftChild(pos),
      right = this.rightChild(pos),
      temp = 0;
    while (!this.isLeaf(pos)) {
      // 获取值较小的子节点
      if (right < this.size) {
        temp = this.compareItems(left, right) ? right : left;
      } else {
        temp = left;
      }
      // 比较当前节点与子节点决定是否下沉
      if (this.compareItems(this.heap[pos], this.heap[temp])) {
        [this.heap[pos], this.heap[temp]] = [this.heap[temp], this.heap[pos]];

        pos = temp;
        left = this.leftChild(pos);
        right = this.rightChild(pos);
      } else {
        break;
      }
    }
  }

  remove(pos: number) {
    if (pos < this.size) {
      let last = this.heap[this.size - 1];
      let delNode = this.heap[pos];

      this.size--;
      this.heap[pos] = last;
      this.sink(pos);
      return delNode;
    }
  }

  insert(node: number) {
    let pos = this.size++;
    this.heap[pos] = node;
    this.swim(pos);
  }

  buildHeap(): void {
    for (let i = this.size - 1; i >= 0; i--) {
      this.sink(i);
    }
  }
}
