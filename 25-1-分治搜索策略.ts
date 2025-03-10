// 给定一个长度为的有序数组 nums ，其中所有元素都是唯一的，请查找元素 target 。
function bfs(nums: number[], target: number, left: number, right: number) {
  let mid = Math.floor(left + (right - left) / 2);

  if (left <= right) {
    if (target > nums[mid]) {
      return bfs(nums, target, mid + 1, right);
    } else if (target < nums[mid]) {
      return bfs(nums, target, left, mid - 1);
    } else {
      return mid;
    }
  } else {
    return -1;
  }
}

// 测试
let arr = [1, 3, 2, 5, 7];
console.log("🚀 ~ arr ~ arr:", bfs(arr, 9, 0, arr.length - 1));
