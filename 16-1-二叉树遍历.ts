// 初始化
class TreeNode {
  constructor(
    public val: number,
    public left?: TreeNode,
    public right?: TreeNode
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.left = n6;
n3.right = n7;

// 广度遍历
function binary_tree_bfs(root: TreeNode) {
  if (!root) return;

  const queue = [root];
  const list = [];

  while (queue.length > 0) {
    const node: TreeNode | undefined = queue.shift();
    list.push(node?.val);

    if (node?.left) {
      queue.push(node.left);
    }

    if (node?.right) {
      queue.push(node.right);
    }
  }

  return list;
}

binary_tree_bfs(n1);
console.log("🚀 ~ binary_tree_bfs(n1):", binary_tree_bfs(n1));

// 深度遍历

// 前序遍历
const pre_order_list: number[] = [];
function pre_order_dfs(root: TreeNode) {
  if (!root) return;
  pre_order_list.push(root.val);
  root.left && pre_order_dfs(root.left);
  root.right && pre_order_dfs(root.right);
}

pre_order_dfs(n1);
console.log("🚀 ~ pre_order_list:", pre_order_list);

// 中序遍历
const in_order_list: number[] = [];
function in_order_dfs(root: TreeNode) {
  if (!root) return;
  root.left && in_order_dfs(root.left);
  in_order_list.push(root.val);
  root.right && in_order_dfs(root.right);
}

in_order_dfs(n1);
console.log("🚀 ~ in_order_list:", in_order_list);

// 后序遍历
const post_order_list: number[] = [];
function post_order_dfs(root: TreeNode) {
  if (!root) return;
  root.left && post_order_dfs(root.left);
  root.right && post_order_dfs(root.right);
  post_order_list.push(root.val);
}

post_order_dfs(n1);
console.log("🚀 ~ post_order_list:", post_order_list);
