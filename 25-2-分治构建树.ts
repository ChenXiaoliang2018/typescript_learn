// 给定一棵二叉树的前序遍历 preorder 和中序遍历 inorder
// 请从中构建二叉树，返回二叉树的根节点。假设二叉树中没有值重复的节点。
class TreeNode {
  constructor(
    public val: number,
    public left?: TreeNode | null,
    public right?: TreeNode | null
  ) {}
}

function tree_build(
  pre_order: number[],
  in_order: number[],
  pre_root: number, // 当前根节点在pre_order中的索引
  in_start: number, // 当前树在in_order中的左边界
  in_end: number // 当前树在in_order中的右边界
): TreeNode | null {
  // 处理一下in_order的结构，降低复杂度
  let in_order_map: Map<number, number> = new Map();
  for (let i = 0; i < in_order.length; i++) {
    in_order_map.set(in_order[i], i);
  }

  // 终止条件
  if (in_start > in_end) {
    return null;
  }

  // 初始化根节点
  let root = new TreeNode(pre_order[pre_root]);
  let in_root = in_order_map.get(pre_order[pre_root]) as number; // 当前根节点在in_order中的索引

  // 构建左子树
  root.left = tree_build(
    pre_order,
    in_order,
    pre_root + 1,
    in_start,
    in_root - 1
  );

  // 构建右子树
  root.right = tree_build(
    pre_order,
    in_order,
    pre_root + 1 + (in_root - in_start),
    in_root + 1,
    in_end
  );
  return root;
}

const pre_order = [1, 3, 2, 5, 7];
const in_order = [2, 3, 5, 1, 7];
const tree = tree_build(pre_order, in_order, 0, 0, pre_order.length - 1);
console.log("🚀 ~ tree:", tree);
