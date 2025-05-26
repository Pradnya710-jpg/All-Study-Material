function createCounter() {
  let counter = 0;
  function inner() {
    let timerId;

    timerId = setInterval(() => {
      counter += 1;

      if (counter > 5) {
        clearInterval(timerId);
      }
    }, 500);
  }
  return inner;
}

let func = createCounter();
func();
