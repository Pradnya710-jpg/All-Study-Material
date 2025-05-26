//handling multiple calls with promise

let promise1 = () =>
  new Promise((res, reject) =>
    setTimeout(() => {
      res("Data  fetch succ");
    }, 100)
  );
console.log(">>>>>>>type", typeof promise1);

// promise1().then((data) =>
//   console.log("data logges").catch((error) => console.log("error", error))
// );
promise1()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed");
  } else {
    reject("Not completed");
  }
});

myPromise
  .then((result) => {
    console.log(">>>>>result", result);
  })
  .catch((error) => console.log("errir", error));

const wait = () => {
  return new Promise((resolve, reject) => {
    let result = false;
    setTimeout(() => {
      if (result) {
        resolve("I am getting the result");
      } else {
        reject("I am not getting result");
      }
    }, 2000);
  });
};

wait()
  .then((result) => {
    console.log(">>>>>result", result);
  })
  .catch((error) => console.log("error", error));
