// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
function backtrack(
  n: number,
  k: number,
  start: number,
  path: number[],
  result: number[][]
) {
  // 终止条件： 添加path的副本
  if (path.length === k) {
    result.push([...path]);
    return;
  }

  // start指定遍历的起点，为了得到不同元素的组合
  //   for (let i = start; i <= n; i++) {
  for (let i = start; i <= n - (k - path.length) + 1; i++) {
    path.push(i);
    // 递归添加i
    backtrack(n, k, i + 1, path, result);
    // 回溯移除i
    path.pop();
  }
}

function combination(n: number, k: number) {
  const result: number[][] = [];
  backtrack(n, k, 1, [], result);
  return result;
}
console.log("🚀 ~ combination(4, 3):", combination(4, 3));
