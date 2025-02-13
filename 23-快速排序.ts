/* 哨兵划分 */
function partition(nums: number[], left: number, right: number): number {
  // 以 nums[left] 为基准数
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      j--; // 从右向左找首个小于基准数的元素
    }
    while (i < j && nums[i] <= nums[left]) {
      i++; // 从左向右找首个大于基准数的元素
    }
    // 元素交换
    [nums[i], nums[j]] = [nums[j], nums[i]]; // 交换这两个元素
  }
  [nums[i], nums[left]] = [nums[left], nums[i]]; // 将基准数交换至两子数组的分界线
  return i; // 返回基准数的索引
}

/* 快速排序 */
function quickSort(nums: number[], left: number, right: number): void {
  // 子数组长度为 1 时终止递归
  if (left < right) {
    // 哨兵划分
    const pivot = partition(nums, left, right);
    // 递归左子数组、右子数组
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }
}

let arr = [];
for (let index = 0; index <= 20; index++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log("🚀 ~ arr:", arr);
quickSort(arr, 0, arr.length - 1);
console.log("🚀 ~ arr:", arr);
