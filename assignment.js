// let newPromise = new Promise((res, rej) => {
//   document.getElementById("myBtn").addEventListener("click", () => {
//     res("myValue");
//   });
//   document.getElementById("myBtn1").addEventListener("click", () => {
//     rej("failed");
//   });
// });

// newPromise
//   .then((res) => console.log("res", res))
//   .catch((err) => console.log("err", err));

// async function myFun(name) {
//   // return  name
//   let res = await newPromise;
//   return res;
// }

// let res = await myFun();
// // console.log(">>>>>>>>>>>>>res",res);

//
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
let arr = ["a", "b"];
arr.forEach((a) => {
  console.log(a);
});

console.log("This is the last");
