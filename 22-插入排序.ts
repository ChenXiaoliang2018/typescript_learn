function insertSort(nums: number[]) {
  // 遍历未排序区间
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j;
    // 遍历已排序区间，将大于base的项向后移动一位
    // 最后将base放到正确的位置
    // while (j >= 0 && nums[j] > base) {
    //   nums[j + 1] = nums[j];
    //   j--;
    // }
    for (j = i - 1; j >= 0 && nums[j] > base; j--) {
      nums[j + 1] = nums[j];
    }
    console.log(j);
    nums[j + 1] = base;
  }
}

const arr = [1, 23, 45, 22, 4, 6, 98, 5, 6];

insertSort(arr);

console.log("🚀 ~ arr:", arr);
