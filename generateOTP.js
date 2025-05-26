// (function Generator(length = 6) {
//   let otp = "";
//   for (let i = 0; i < length; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   console.log("..........", otp);
// })();

let array = [1, 2, 3, 4, 5];
delete array[0];
console.log("arra", array.length);

let a = 5;
let b = 1;
[a, b] = [b, a];
console.log("a,b", a);
