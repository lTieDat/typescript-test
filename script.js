// Lê Tiến Đạt
// q1
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
console.log("Output question 1:");
console.log("Input :[2,7,11,15], 9 -> index:", twoSum([2, 7, 11, 15], 9));
console.log("Input :[3,2,4], 6 -> index:", twoSum([3, 2, 4], 6));
console.log("___________________________");

//q2
// import { search } from './questions/q2.js';
function search(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
console.log("Output question 2:");
console.log("Input :[1,3,5,6], 5 -> index:", search([1, 3, 5, 6], 5));
console.log("Input :[1,3,5,6], 2 -> index:", search([1, 3, 5, 6], 2));
console.log("Input :[1,3,5,6], 7 -> index:", search([1, 3, 5, 6], 7));
console.log("___________________________");

//q3
var solve3 = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  var dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log("Output question 3:");
console.log("Input :2 -> Number of step:", solve3(2));
console.log("Input :2 -> Number of step:", solve3(3));
console.log("Input :2 -> Number of step:", solve3(4));
console.log("___________________________");

//q4
var Person = /** @class */ (function () {
  function Person(name) {
    this.name = name;
  }
  // Mở rộng class Person với method greeting
  Person.prototype.greeting = function (person) {
    // Kiểm tra nếu person là một đối tượng thuộc class Person
    if (person instanceof Person) {
      // In ra một thông điệp chào mừng với tên của person
      console.log("Xin ch\u00E0o, ".concat(this.name, "!"));
    } else if (typeof person === "string") {
      // Kiểm tra nếu person là một chuỗi
      // In ra một thông điệp chào mừng với chuỗi person
      console.log("Xin ch\u00E0o, ".concat(person, "!"));
    }
  };
  // Mở rộng class Person với method printValue
  Person.prototype.printValue = function (value) {
    // Kiểm tra nếu giá trị truyền vào là một chuỗi
    if (typeof value === "string") {
      // In ra một thông điệp với giá trị của chuỗi đó
      console.log(
        "Gi\u00E1 tr\u1ECB n\u00E0y l\u00E0 m\u1ED9t chu\u1ED7i: ".concat(
          this.name
        )
      );
    } else if (typeof value === "number") {
      // Kiểm tra nếu giá trị truyền vào là một số
      // In ra một thông điệp với giá trị của số đó
      console.log(
        "Gi\u00E1 tr\u1ECB n\u00E0y l\u00E0 m\u1ED9t s\u1ED1: ".concat(
          this.name
        )
      );
    }
  };
  return Person;
})();
// vi du cho class person:
console.log("Output question 4:");
var person = new Person("DatLT");
person.greeting("DatLT");
person.printValue("DatLT");
console.log("___________________________");
