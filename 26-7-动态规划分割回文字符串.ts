export function partition(s: string) {
  const n = s.length;
  const result: string[][] = [];

  // ================= 动态规划预处理 =================
  // 创建二维数组并初始化
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  // 填充动态规划表
  for (let i = n - 1; i >= 0; i--) {
    // 从后向前遍历起点
    for (let j = i; j < n; j++) {
      // 从前向后遍历终点
      if (i === j) {
        // 单字符情况
        dp[i][j] = true;
      } else if (s[i] === s[j]) {
        // 首尾字符相同
        if (j - i === 1) {
          // 双字符情况
          dp[i][j] = true;
        } else {
          // 多字符情况
          dp[i][j] = dp[i + 1][j - 1]; // 取决于内部子串
        }
      }
    }
  }

  // ================= 回溯算法 =================
  const backtrack = (start: number, path: string[]) => {
    if (start === n) {
      result.push([...path]); // 存储有效分割方案
      return;
    }

    for (let end = start; end < n; end++) {
      if (dp[start][end]) {
        // 直接查表判断回文
        const substring = s.slice(start, end + 1);
        path.push(substring);
        backtrack(end + 1, path); // 处理剩余字符串
        path.pop(); // 回溯
      }
    }
  };

  backtrack(0, []);
  return result;
}

partition("aab");
console.log("🚀 ~ partition('aab'):", partition("aab"));
