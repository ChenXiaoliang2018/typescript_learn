function selectedSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    // 缓存第i项
    let k = i;
    // 如果第i+1项后边有比第i项小的，就让第一个比i项小的项和第i项交换位置
    // 如果第i+1项后边没有比第i项小的，就保持第i项位置不变
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[k]) {
        k = j;
      }
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
}
let arr = [2, 5, 3, 3, 7, 9, 9];
selectedSort(arr);
console.log("🚀 ~ arr:", arr);
