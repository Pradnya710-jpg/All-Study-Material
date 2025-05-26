Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
});

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

console.log("Main Thread");

// process.nextTick(function tick() {
//   console.log("tick");
//   process.nextTick(tick);
// });

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => {
  console.log("promise");
});

process.nextTick(() => {
  console.log("nextTick");
});
