let x = 10;
function Outer() {
  //console.log(x);
  if (false) {
    console.log("in the ");

    var x = 20;
  }
}

for (var index = 0; index < 3; index++) {
  setTimeout(() => {
    //console.log("i", index);
  }, 100);
}
for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    //console.log("i", index);
  }, 100);
}
// for (var index = 0; index < 3; index++) {
//   setInterval(() => {
//     console.log("in interval", index);
//   }, 100);
// }

// function main() {
//   console.log("b", b);
//   console.log("a", a);
//   let a = 10;
//   var b = 20;
// }
// main();

function* generator() {
  let i = 0;
  while (i < 5) {
    yield i++;
  }
}

let generatorFun = generator();
console.log(">>>>>>>gen", generatorFun.next().value);
console.log(">>>>>>>gen", generatorFun.next().value);
