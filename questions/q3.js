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
var solve3 = function (n) {
    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    var dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

module.exports = solve3;