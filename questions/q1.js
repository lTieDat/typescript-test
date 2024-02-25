/*
Cho một mảng số nums và một số target, trả về index của hai số sao cho tổng của chúng bằng target.

Bạn không thể sử dụng cùng một phần tử hai lần.

Bạn có thể trả lời kết quả theo bất kỳ thứ tự nào.

Yêu cầu đầu vào:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109

Ví dụ 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Giải thích: Vì nums[0] + nums[1] == 9, nên chúng ta trả về [0, 1].

Ví dụ 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Ví dụ 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/
//solve:
var twoSum = function (nums, target) {
    var numIndexMap = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numIndexMap.hasOwnProperty(complement)) {
            return [numIndexMap[complement], i];
        }
        numIndexMap[nums[i]] = i;
    }
    return [];
};

module.exports = twoSum;