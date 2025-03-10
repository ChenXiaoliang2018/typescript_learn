function backtrack(
  k: number,
  n: number,
  start: number,
  sum: number,
  path: number[],
  result: number[][]
) {
  // 剪枝1：某次递归sum大于n
  if (sum > n) return;
  if (path.length === k && sum === n) {
    // 传入path的副本，而不是path的引用
    result.push([...path]);
    return;
  }

  // 剪枝2： 某次循环发现1~9中第i项后边的元素数量满足不了k
  for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
    path.push(i);
    sum += i;
    // 递归操作： 传入i+1取不同元素，传入的sum是上一个sum+i
    backtrack(k, n, i + 1, sum, path, result);
    path.pop();
    sum -= i;
  }
}

function combine(k: number, n: number) {
  const result: number[][] = [];
  const path: number[] = [];
  backtrack(k, n, 1, 0, path, result);
  return result;
}

console.log("🚀 ~ combine(2, 9):", combine(2, 9));
