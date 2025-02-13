// 访问元素
function randomAccess(arr: number[]): number {
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log("🚀 ~ randomAccess ~ randomIndex:", randomIndex);
  return arr[randomIndex];
}
console.log("🚀 ~ randomAccess([1, 3, 4, 5]):", randomAccess([1, 3, 4, 5]));

// 插入元素
function insert(arr: number[], num: number, idx: number) {
  // 将idx位置以后的元素都后移一位
  for (let i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];
  }
  console.log("🚀 ~ insert1 ~ arr:", arr);
  // 将第idx位设置为num
  arr[idx] = num;
  return arr;
}
console.log("🚀 ~ insert([1, 2, 3], 4, 1):", insert([1, 2, 3], 4, 1));

// 删除元素
const arr = [1, 2, 3, 4, 5];

function remove(arr: number[], idx: number) {
  // 将第idx后的元素都向前移动一位
  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
}
remove(arr, 1);
console.log("🚀 ~ arr:", arr);

// 遍历数组
function traverse(arr: number[]): number {
  let count = 0;
  for (let item of arr) {
    count += item;
  }
  return count;
}
console.log("🚀 ~ traverse([1,2,3,4]):", traverse([1, 2, 3, 4]));

// 查找元素
function find(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("🚀 ~ find([1, 2, 3, 4], 3):", find([1, 2, 3, 4], 3));

// 数组扩容
function enlarge(arr: number[], enlarge: number) {
  const res = new Array(arr.length + enlarge).fill(0);
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }
  return res;
}
console.log("🚀 ~ enlarge([1, 2, 3], 4):", enlarge([1, 2, 3], 2));
