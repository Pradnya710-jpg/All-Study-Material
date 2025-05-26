//Expanding an Array

const arr = [1, 2, 3, [2, [3, 5], [4]]];
const array1 = [1, 7, 8, 9, 9];
const result = arr.flatMap((a) => a * 2);
console.log("resut", result);

const flatResult = arr.flat(Infinity);

console.log("flatResult", flatResult);
const mapResult = array1.map((a) => a * 2);
console.log("mapResult", mapResult);
console.log(typeof array1);

//Other diff

// (function IIFE() {
//   var x = 20;
//   console.log(x);
// })();

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(">>>>>>>>>>>>>>>>in the let variabke", i);
//   });
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(">>>>>>>>>>>>>>>>in the var variable", i);
//   });
// }

const person = {
  name: "Pradnya",
  greet: function () {
    return `Hello, ${this.name}`;
  },
};

const greetFn1 = person.greet.bind(person);
// greetFn1();
console.log(">>>>>>>>greetFn>>", greetFn1());

const greetFn = () => person.greet();
console.log(">>>>>>>>greetFn>>", greetFn());
