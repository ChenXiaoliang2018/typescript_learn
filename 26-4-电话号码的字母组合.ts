// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
function backtrack(
  digits: string,
  index: number,
  path: string,
  result: string[]
) {
  // 终止条件
  if (index === digits.length) {
    // 因为path是简单类型，所以不用考虑副本
    result.push(path);
    return;
  }
  let digitsObject: { [key: string]: string } = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  let digit = digitsObject[digits[index]];
  for (let i = 0; i < digit.length; i++) {
    // path += digit[i];
    // backtrack(digits, index + 1, path, result);
    // path = path.substring(0, path.length - 1);

    // 回溯的过程隐藏在path + digit[i]中了
    backtrack(digits, index + 1, path + digit[i], result);
  }
}

function digitToLetter(digits: string) {
  const result: string[] = [];
  // 判空处理
  if (digits.length === 0) return [];
  backtrack(digits, 0, "", result);
  return result;
}
digitToLetter("23");
console.log("🚀 ~ digitToLetter('23'):", digitToLetter("23"));
