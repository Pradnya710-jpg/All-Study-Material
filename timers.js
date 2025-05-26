setTimeout(() => {
  console.log("In the timeout function");
}, 1000);

const intervalId = setInterval(() => {
  clearInterval(intervalId);
  console.log("Repeating every 1 second");
}, 3000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Stopped the interval");
// }, 5000);
