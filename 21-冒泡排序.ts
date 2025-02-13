function bubbleSort(nums: number[]) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 冒泡过程：如果第j项大于其后的一项，则将第j项换为第j+1项，将第j+1项换为第j项
      if (nums[j] > nums[j + 1]) {
        // const temp = nums[j];
        // nums[j] = nums[j + 1];
        // nums[j + 1] = temp;

        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      }
    }
  }
}

const arr = [2, 3, 6, 5, 8, 2, 3, 4, 9, 54, 22, 26];

bubbleSort(arr);
console.log("🚀 ~ arr:", arr);
