// 给定一个长度为n的数组 nums ，元素按从小到大的顺序排列且不重复。
// 请查找并返回元素 target 在该数组中的索引。若数组不包含该元素，则返回-1

function BinarySearch(nums: number[], target: number) {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      return m;
    }
  }

  return -1;
}

// BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 9);
console.log(
  "🚀 ~ BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 9):",
  BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 9)
);
