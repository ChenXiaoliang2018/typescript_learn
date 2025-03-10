// 合并两个有序数组
function merge(nums: number[], left: number, mid: number, right: number) {
  // 创建一个临时数组
  const temp = new Array(right - left + 1);

  // 初始化索引
  let i = left,
    j = mid + 1,
    k = 0;

  // 当左右数组还有元素时，比较后将较小成员放到temp中
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }

  // 将左右数组剩余元素复制到temp中
  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= right) {
    temp[k++] = nums[j++];
  }

  //   将temp中的值复制回nums对应区间
  for (k = 0; k < temp.length; k++) {
    nums[left + k] = temp[k];
  }
}

function mergeSort(nums: number[], left: number, right: number) {
  // 终止条件
  if (left >= right) return;

  // 划分阶段
  let mid = Math.floor(left + (right - left) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);

  // 合并阶段
  merge(nums, left, mid, right);
}

// 测试
let arr = Array.from({ length: 10 }).reduce((acc: number[]) => {
  acc.push(Math.floor(Math.random() * 100 + 1));
  return acc;
}, []);
console.log("🚀 ~ arr ~ arr:", arr);

const t1 = performance.now();
mergeSort(arr, 0, arr.length - 1);
const t2 = performance.now();

const diff = t2 - t1;
console.log("🚀 ~ diff:", diff);
console.log("🚀 ~ arr ~ arr:", arr);
