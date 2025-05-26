// let array = [20, 10, 30, 15, 60];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element)

// }

function evenNumber(args) {
  console.log("args", args);
  let newArray = [];

  args.forEach((ele) => {
    if (ele % 2 === 0) newArray.push(ele);
  });

  return newArray;
}

//let arrays = evenNumber([2, 3, 4, 10, 12, 20, 56]);
//console.log("arrays", arrays);

// function evenNumber(args) {
//     console.log("args", args);

//     let eventNoResult = args.filter((ele) => {
//       return ele % 2 === 0;
//     });

//     return eventNoResult;
//   }

//   let arrays = evenNumber([2, 3, 4, 10, 12, 20, 56]);
//   console.log("arrays", arrays);

function maxNumberFind(args) {
  //   let max = args[0];
  //   for (let i = 0; i < args.length; i++) {
  //     let ele = args[i];
  //     if (ele > max) {
  //       max = ele;
  //     }
  //   }
  //   return max;

  return Math.max(...args);
}

let arrayMax = maxNumberFind([2, 3, 4, 1, 12, 20, 56]);
console.log("arrayMax", arrayMax);

let str = " indira  ";
// const reverseStr = str.split("");
// console.log("rever", typeof reverseStr);
// console.log(typeof []);

//Flatten Array

function flattenArray(array) {
  return array.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5]]));
