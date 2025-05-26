// function a() {
//   console.log("A");
// }

// setTimeout(() => console.log("B"), 0);
// a();
// console.log("C");
// Promise.resolve().then(() => {
//   console.log(",,,,,,,D");
// });

//First run all the sync code all console.log() first print (Golbal excution)/
//after run the Promises because its high priority and then run callstacks

function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();
