// function add(a, b) {
//   return a + b;
// }
// console.log("add", add(1, 2));

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// // let additionResult = add(2);
// // console.log(">>>>>>>>>", additionResult(4));

// const curryingFun = (fn) => (arr) => arr.map(fn);

// const double = (x) => x * 2;
// let numbers = [1, 2, 3, 4, 4, 5];

// let currying = curryingFun(double)(numbers);
// console.log("currying", currying);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// let curryingOutput = sum(2)(6)(1);

// // console.log("curryingOutput", curryingOutput);

// ("use strict");
// function add(a, b = 2, c = 4) {
//   return a + b + c;
// }
// let additionOf = add(1, 10, 20);
// console.log("addd>>>>>>>>>", additionOf);

// function add() {}

const add1 = () => {
  console.log("..............", arguments);
};
add1(1, 2, 3);

function mergeData(arr1, arr2) {
  let newArray = [...arr1, ...arr2];

  let newArrResult = [];
  let newValue;
  newArray.map((item) => {
    const existing = newArrResult.filter((ele) => {
      if (ele === item.id) {
        return ele;
      }
    });

    if (existing) {
      Object.assign(existing, item);
    } else {
      newArrResult.push(item);
    }
  });

  return newArrResult;
}
