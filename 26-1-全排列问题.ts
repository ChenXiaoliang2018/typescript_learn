// 输入一个整数数组 nums，其中不包含重复元素，返回所有可能的排列。

function permutation(nums: number[]) {
  const result: number[][] = [];
  const used: boolean[] = Array(nums.length).fill(false);
  backtrack(nums, [], result, used);
  return result;
}

function backtrack(
  nums: number[],
  path: number[],
  result: number[][],
  used: boolean[]
) {
  // 终止条件
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // 如果当前元素使用过，则跳过当前循环
    if (used[i]) continue;
    // 每轮循环中添加当前元素，并且标记为已使用
    path.push(nums[i]);
    used[i] = true;
    // 递归相关操作，用来添加nums[i]
    backtrack(nums, path, result, used);
    // 回溯相关操作, 用来移除nums[i]
    path.pop();
    used[i] = false;
  }
}

console.log("🚀 ~ permutation([1, 2, 3]):", permutation([1, 2, 3]));
