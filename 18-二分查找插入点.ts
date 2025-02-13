// 给定一个长度为 n 的有序数组 nums 和一个元素 target ，数组不存在重复元素。
// 现将 target 插入数组 nums 中，并保持其有序性。若数组中已存在元素 target ，则插入到其左方。
// 请返回插入后 target 在数组中的索引。

function BinarySearch(nums: number[], target: number) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);

    if (target > m) {
      i = m + 1;
    } else if (target < m) {
      j = m - 1;
    } else {
      return [i, j];
    }
  }
}

// console.log(
//   "🚀 ~ BinarySearch([1, 2, 3, 4, 6, 7], 5):",
//   BinarySearch([1, 2, 3, 4, 6, 7], 5)
// );

// 条件同上，但数组存在重复元素。
function BinarySearchRepeat(nums: number[], target: number) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      j = m - 1;
    }
  }

  return [i, j];
}

// console.log(
//   "🚀 ~ BinarySearchRepeat",
//   BinarySearchRepeat([1, 2, 3, 4, 5, 6, 6], 6)
// );

console.log(
  "🚀 ~ BinarySearchRepeat",
  BinarySearchRepeat([1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9], 6.5)
);
