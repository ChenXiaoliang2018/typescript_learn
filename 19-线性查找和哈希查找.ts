// 给定一个整数数组 nums 和一个目标元素 target ，请在数组中搜索“和”为 target 的两个元素，并返回它们的数组索引。返回任意一个解即可。
function towSumBruteForce(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// towSumBruteForce([1, 2, 3, 4, 5, 6, 7, 8, 9], 13);
// console.log(
//   "🚀 ~ towSumBruteForce([1, 2, 3, 4, 5, 6, 7, 8, 9], 13):",
//   towSumBruteForce([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)
// );

function twoSumHashSearch(nums: number[], target: number) {
  let m: Map<number, number> = new Map();

  for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    let anotherIndex = m.get(target - nums[curIndex]);
    if (anotherIndex === undefined) {
      m.set(nums[curIndex], curIndex);
    } else {
      return [curIndex, anotherIndex];
    }
  }
}

// twoSumHashSearch([2, 2, 5, 4, 8, 6, 7, 8, 9], 13);
console.log(
  "🚀 ~ twoSumHashSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 13):",
  twoSumHashSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)
);
