// const memoize = (func) => {
//   const cache = {};

//   return function (...args) {
//     const strKey = JSON.stringify(args);

//     if (!(strKey in cache)) {
//       cache[strKey] = func(...args);
//     }

//     return cache[strKey];
//   };
// };

// let sum = (a, b) => {
//   let c = a + b;

//   return c;
// };

// let result = memoize(sum);
// result(1, 2);
// result(1, 2);
// result(4, 5);
// result(4, 7);
// result(10, 2);
// result("10", 2);

function highestAverageAmount(payments) {
  //   let avg = 0;
  const sums = {};
  const counts = {};

  for (const [service, amount] of payments) {
    // if (amount > maxAmount) {
    //   maxAmount = amount;
    //   maxService = service;
    // }

    sums[service] = (sums[service] || 0) + amount;
    counts[service] = (counts[service] || 0) + 1;
  }

  let highestService = "";
  let highestAverageAmount = 0;
  for (const element in sums) {
    let avg = sums[element] / counts[element];
    if (avg > highestAverageAmount) {
      highestAverageAmount = avg;
      highestService = element;
    }
  }
  return highestService;
}

let amountData = [
  ["Swiggy", 123],
  ["Swiggy", 227],
  ["Zomato", 103],
  ["Zomato", 171],
  ["Dunzo", 131],
  ["Zomato", 122],
  ["Swiggy", 181],
];
const result = highestAverageAmount(amountData);
console.log(result);
