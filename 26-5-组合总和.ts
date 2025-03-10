// 给你一个无重复元素的整数数组candidates和一个目标整数target，
// 找出candidates中可以使数字和为目标数target的所有不同组合，并以列表形式返回。
// candidates中的同一个数字可以无限制重复被选取。如果至少一个数字的被选数量不同，则两种组合是不同的。

function backtrack(
  nums: number[],
  target: number,
  sum: number,
  start: number,
  path: number[],
  result: any[]
) {
  // 剪枝1： 当前和大于目标值
  if (sum > target) return;
  if (sum === target) {
    result.push([...path]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    // 剪枝2： 当前和加上nums[i] 大于目标值
    if (sum + nums[i] > target) continue;
    path.push(nums[i]);
    sum += nums[i];
    // 递归的时候，因为允许重复选取，所以下一轮递归传入的是i，不是i+1
    backtrack(nums, target, sum, i, path, result);
    path.pop();
    sum -= nums[i];
  }
}

function combinationSum(nums: number[], target: number) {
  const result: any[] = [];
  // 对nums排序方便剪枝
  nums.sort((a, b) => a - b);
  backtrack(nums, target, 0, 0, [], result);
  return result;
}

combinationSum([2, 3, 5], 8);
console.log("🚀 ~ combinationSum([2,3,5], 8):", combinationSum([2, 3, 5], 8));
