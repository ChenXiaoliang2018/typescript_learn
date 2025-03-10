// 判断是否是回文字符串的辅助函数

function isPalindrome(str: string) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function backtrack(
  str: string,
  start: number,
  path: string[],
  result: string[][]
) {
  // 终止条件
  if (start === str.length) {
    // 收集path的副本作为解
    result.push([...path]);
    return;
  }

  // 单层逻辑
  for (let i = start; i < str.length; i++) {
    const subStr = str.slice(start, i + 1);
    if (isPalindrome(subStr)) {
      path.push(subStr);
      //   递归
      backtrack(str, i + 1, path, result);
      //   回溯
      path.pop();
    }
  }
}

function partition(str: string) {
  const result: string[][] = [];
  backtrack(str, 0, [], result);
  return result;
}

// 测试 partition 函数

function testPartition() {
  const testCases = [
    {
      input: "aab",
      expected: [
        ["a", "a", "b"],
        ["aa", "b"],
      ],
    },
    { input: "a", expected: [["a"]] },
    {
      input: "abba",
      expected: [["a", "b", "b", "a"], ["a", "bb", "a"], ["abba"]],
    },
    {
      input: "racecar",
      expected: [
        ["r", "a", "c", "e", "c", "a", "r"],
        ["r", "a", "cec", "a", "r"],
        ["r", "aceca", "r"],
        ["racecar"],
      ],
    },
    { input: "", expected: [[]] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = partition(input);
    console.log(
      `Test case ${index + 1}:`,
      JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed"
    );
  });
}

testPartition();
