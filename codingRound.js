// const arr = [1, 2, 3];
// arr.forEach((num, i) => {
//   if (num === 2) arr.splice(i, 2);
// });

// console.log(arr);

// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json(); // ✅ convert to actual JSON
//     console.log(data.title);
//   } catch (err) {
//     console.error(err);
//   }
// }
// fetchData();

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 124;
// a[c] = 456;
// console.log(">>>>>>>", a[b]);

function once(fn) {
  console.log("fn", fn);

  let call = false;
  let result;
  return function (...args) {
    if (!call) {
      call = true;
      console.log("args", args);

      result = fn.apply(args);
    }
    return result;
  };
}

const logOnce = once(function add() {
  console.log("Inside function");
});
logOnce(); // "Hello!"
logOnce();

(function once() {
  let excution = false;

  return function () {
    if (!excution) {
      excution = true;
    }
  };
})();

// let IIFE = (() => {
//   let excuted = false;

//   return () => {
//     if (!excuted) {
//       excuted = true;
//       console.log("excuted");
//     }
//   };
// })();

// IIFE();
// IIFE();

// let count = 0;

// function increment() {
//   count++;
//   console.log("count", count);
//   let timeId;

//   if (count === 5) {
//     console.log("in the if");

//     clearTimeout(timeId);
//   } else {
//     console.log("in the else");

//     setTimeout(() => {
//       increment;
//     }, 1000);
//   }
// }

// increment();

// let count = 0;

// function increment() {
//   if (count <= 5) {
//     count++;
//     console.log("count", count);

//     setTimeout(increment, 1000);
//   }
// }

// increment();

// console.log(">>>>>>>>>>>", +true);
