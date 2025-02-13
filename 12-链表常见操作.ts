// 初始化链表
class ListNode {
  constructor(public value?: number, public next?: ListNode | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
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

// console.log("🚀 ~ n0:", n0);
// console.log("🚀 ~ n1:", n1);
// console.log("🚀 ~ n2:", n2);
// console.log("🚀 ~ n3:", n3);
// console.log("🚀 ~ n4:", n4);

// 插入节点
function insert(node: ListNode, P: ListNode) {
  // 获取目标结点的指针，也就是下一个节点
  const node_next = node.next;
  // 将P的指针指向下一个节点
  P.next = node_next;
  // 将目标节点的指针指向P
  node.next = P;
}

const p_node = new ListNode(9);
insert(n0, p_node);

// console.log("🚀 ~ n0:", n0);
// console.log("🚀 ~ p_node:", p_node);
// console.log("🚀 ~ n1:", n1);

// 删除节点
function remove(node: ListNode) {
  // 删除某个节点，传入的node是该节点的上一个节点
  if (!node.next) return;
  // 获取要删除的节点P
  const P = node.next;
  // 获取P的下一个节点
  const node_next = P.next;
  // 将P的上个节点指针修改为P的下一个节点
  node.next = node_next;
}

remove(n0);

// console.log("🚀 ~ n0:", n0);
// console.log("🚀 ~ n1:", n1);

// 访问节点
// 输入index，返回第index项的节点
function access(index: number) {
  let head = n0;
  for (let i = 0; i < index; i++) {
    if (head && head.next) {
      head = head.next;
    } else {
      return null;
    }
  }
  return head;
}
// console.log("🚀 ~ access(2):", access(2));
// console.log("🚀 ~ access(3):", access(3));

// 查找节点
function find(target: number) {
  let head = n0;
  while (head) {
    if (head.value === target) {
      return head;
    } else {
      if (head && head.next) {
        head = head.next;
      }
    }
  }
}

console.log("🚀 ~ find(3):", find(3));
