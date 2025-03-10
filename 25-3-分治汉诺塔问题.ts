// 给定三根柱子，记为 A、B 和 C 。
// 起始状态下，柱子 A 上套着 n 个圆盘，它们从上到下按照从小到大的顺序排列。
// 我们的任务是要把这 n 个圆盘移到柱子 C 上，并保持它们的原有顺序不变。

// 在移动圆盘的过程中，需要遵守以下规则。
// 圆盘只能从一根柱子顶部拿出，从另一根柱子顶部放入。
// 每次只能移动一个圆盘。
// 小圆盘必须时刻位于大圆盘之上。

// 移动一个圆盘
function move(src: number[], tar: number[]) {
  const temp = src.pop() as number;
  tar.push(temp);
}

function dfs(n: number, src: number[], buf: number[], tar: number[]) {
  // 终止条件
  if (n === 1) {
    move(src, tar);
    return;
  }

  // 将src顶部n-1个圆盘借助tar移动到buf
  dfs(n - 1, src, tar, buf);
  console.log("🚀 ~ before ~ src:", src);
  console.log("🚀 ~ before ~ buf:", buf);
  console.log("🚀 ~ before ~ tar:", tar);
  // 将src底部剩余一个圆盘移到tar
  move(src, tar);
  console.log("🚀 ~ move ~ src:", src);
  console.log("🚀 ~ move ~ buf:", buf);
  console.log("🚀 ~ move ~ tar:", tar);
  // 将buf顶部n-1个圆盘借助src移动到tar
  dfs(n - 1, buf, src, tar);
  console.log("🚀 ~ after ~ src:", src);
  console.log("🚀 ~ after ~ buf:", buf);
  console.log("🚀 ~ after ~ tar:", tar);
}

let A = [7, 5, 3, 2, 1],
  B: number[] = [],
  C: number[] = [];

dfs(A.length, A, B, C);
