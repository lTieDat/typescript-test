/*
Bạn đang leo lên một bậc thang. Để đạt đến đỉnh, bạn cần thực hiện n bước.

Mỗi lần bạn có thể đi bộ 1 hoặc 2 bước. Có bao nhiêu cách riêng biệt để bạn có thể leo lên đỉnh?

Ví dụ 1:
Input: n = 2
Output: 2
Giải thích: Có hai cách để leo lên đỉnh.

    1 bước + 1 bước
    2 bước


    
Ví dụ 2:
Input: n = 3
Output: 3
Giải thích: Có ba cách để leo lên đỉnh.

    1 bước + 1 bước + 1 bước
    1 bước + 2 bước
    2 bước + 1 bước
*/
//solve:
const solve3 = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
console.log(solve3(2));
console.log(solve3(3));
console.log(solve3(4));
