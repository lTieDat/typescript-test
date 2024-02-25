/*
Giải thích đoạn code dưới dây bằng comment, mở rộng class Person với method greeting và printValue, trong đó  các method này sẽ sử dụng chung interface với  các function ở ngoài, nhưng sẽ trả ra các đoạn text khác với các function ở ngoài
*/
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// function greet(person: Person | string): void {
//   if (person instanceof Person) {
//     console.log(`Hello, ${person.name}!`);
//   } else if (typeof person === 'string') {
//     console.log(`Hello, ${person}!`);
//   }
// }
// function printValue(value: string | number): void {
//   if (typeof value === 'string') {
//     console.log(`The value is a string: ${value}`);
//   } else if (typeof value === 'number') {
//     console.log(`The value is a number: ${value}`);
//   }
// }
//solve:
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
        }
        else if (typeof person === 'string') {
            // Kiểm tra nếu person là một chuỗi
            // In ra một thông điệp chào mừng với chuỗi person
            console.log("Xin ch\u00E0o, ".concat(person, "!"));
        }
    };
    // Mở rộng class Person với method printValue
    Person.prototype.printValue = function (value) {
        // Kiểm tra nếu giá trị truyền vào là một chuỗi
        if (typeof value === 'string') {
            // In ra một thông điệp với giá trị của chuỗi đó
            console.log("Gi\u00E1 tr\u1ECB n\u00E0y l\u00E0 m\u1ED9t chu\u1ED7i: ".concat(this.name));
        }
        else if (typeof value === 'number') {
            // Kiểm tra nếu giá trị truyền vào là một số
            // In ra một thông điệp với giá trị của số đó
            console.log("Gi\u00E1 tr\u1ECB n\u00E0y l\u00E0 m\u1ED9t s\u1ED1: ".concat(this.name));
        }
    };
    return Person;
}());
module.exports = Person;

