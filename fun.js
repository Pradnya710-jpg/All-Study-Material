// function normalFunc() {
//   console.log(arguments);
// }
// normalFunc(1, 2, 3); // [1, 2, 3]

function sum(...args) {
  console.log("args", args);
}

sum(1, 2);
// let arrowFucln = () => {
//   console.log(arguments);
// };
// arrowFun(1, 2, 3);

// const numbers = [1, 2, 3, 4];
// numbers.forEach(function sum(num) {
//   console.log("Number:", num);
// });

// numbers.forEach((ele) => {
//   console.log("ele", ele);
// });

// {
//   var a = 10;
//   console.log("a", a);
// }
// function funScope() {
//   console.log("inside fun", a);
// }
// funScope();

//console.log("a", a);
console.log("b", b);
let a = 10;
var b = 5;
