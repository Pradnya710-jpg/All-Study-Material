//Debounce
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log("query>>>>>>>>", query);
};

let debounceResult = debounce(search, 1000);

// debounceResult("Hello");
// debounceResult("Hello Prad");
// debounceResult("Hello welcome");
// debounceResult("Hello Pradnya Bedse");

// throttling

function throttlingFun(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

const throttling = (messge) => {
  console.log("message<<<<<<<<<", messge);
};

let throttlingResult = throttlingFun(throttling, 1000);
throttlingResult("Hello");
setTimeout(() => {
  throttlingResult("Hello how");
}, 1000);

setTimeout(() => {
  throttlingResult("Hello are");
}, 2000);

setTimeout(() => {
  throttlingResult("Hello are you");
}, 3000);
