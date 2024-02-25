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
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // Mở rộng class Person với method greeting
  greeting(person: Person | string): void {
    // Kiểm tra nếu person là một đối tượng thuộc class Person
    if (person instanceof Person) {
      // In ra một thông điệp chào mừng với tên của person
      console.log(`Xin chào, ${this.name}!`);
    } else if (typeof person === 'string') {
      // Kiểm tra nếu person là một chuỗi
      // In ra một thông điệp chào mừng với chuỗi person
      console.log(`Xin chào, ${person}!`);
    }
  }

  // Mở rộng class Person với method printValue
  printValue(value: string | number): void {
    // Kiểm tra nếu giá trị truyền vào là một chuỗi
    if (typeof value === 'string') {
      // In ra một thông điệp với giá trị của chuỗi đó
      console.log(`Giá trị này là một chuỗi: ${this.name}`);
    } else if (typeof value === 'number') {
      // Kiểm tra nếu giá trị truyền vào là một số
      // In ra một thông điệp với giá trị của số đó
      console.log(`Giá trị này là một số: ${this.name}`);
    }
  }
}
// vi du cho class person:
let person = new Person('DatLT');
person.greeting('DatLT');
person.printValue('DatLT');
