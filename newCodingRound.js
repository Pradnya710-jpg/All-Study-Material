function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

let searchQuery = (query) => {
  console.log(".........the query", query);
};

let debounceResult = debounce(searchQuery, 1000);
// debounceResult("Pradnya Bedse");
// debounceResult("Pradnya  Bedse new");
// debounceResult("Pradnya ");
// debounceResult("Pradnya  Nitin Bedse how are you????????????????");

function debounceCalc(fn, timer) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, timer);
  };
}

const calculateSum = (a, b) => {
  let c = a + b;
  console.log("c the result", c);
};
let debounceCalcResult = debounceCalc(calculateSum, 1000);
// debounceCalcResult(3, 4);
// debounceCalcResult(5, 4);
// debounceCalcResult(9, 4);

// advance level deboucong

// function debounceFun(fn, delay) {
//   let timerID;
//   let result;
//   let call = 1;
//   let noofCall = 0;

//   return function (...args) {
//     if (noofCall < call) {
//       noofCall++;
//       result = fn.apply(this, args);
//     } else {
//       clearTimeout(timerID);
//       timerID = setTimeout(() => {
//         result = fn.apply(this, args);
//       }, delay);
//       return false;
//     }
//   };
// }

// const calculator = {
//   //   a: 10,
//   //   b: 20,
//   calculateSum: function (a, b) {
//     console.log("sum of the no", a + b);
//   },
// };

// const debounceSum = debounceFun(calculator.calculateSum, 1000);
// // debounceSum(1, 2);
// // debounceSum(4, 5);
// // debounceSum(10, 20);

// setInterval(() => {
//   debounceSum(1, 4);
//   debounceSum(9, 4);
//   debounceSum(3, 4);
//   debounceSum(5, 4);
// }, 1000);

// throtlling

function throtllingFun(fn, delay) {
  let lastCalled = 0;
  return function (...args) {
    const now = new Date();
    if (now - lastCalled >= delay) {
      lastCalled = now;
      fn.apply(this, args);
    }
  };
}

const calculatorOb = {
  calculateSum: function (a, b) {
    console.log("sum of the no", a + b);
  },
};

const throttleSum = throtllingFun(calculatorOb.calculateSum, 200);

// setInterval(() => {
//   throttleSum(1, 4); // Only this will run every second
//   throttleSum(9, 4);
//   throttleSum(3, 4);
//   throttleSum(5, 4);
// }, 200);

//hogher Order func

function higherOrder(fn) {
  return function (args) {
    return fn(args);
  };
}
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];

let activeUser = (array) => {
  let result = array.filter((ele) => {
    if (ele.isActive) {
      return ele;
    }
  });
  return result;
};

// let higherOrderFun = higherOrder(activeUser);
// let result = higherOrderFun(users);
// console.log("result", result);

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("John Doe"), 1000);
  });
}

function getPostsByUser(user) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(["Post1", "Post2"]), 1000);
    let value = false;
    if (value) {
      resolve("The data is resolve");
    } else {
      reject("The data is missed");
    }
  });
}

//async and wait
async function getData() {
  console.log("Fetching data...");
  const user = await getUser();
  const getPost = await getPostsByUser();
  const [userInfo, posts] = await Promise.allSettled([
    Promise.resolve(user),
    Promise.resolve(getPost),
  ]);
  return { userInfo, posts };
}
getData()
  .then((result) => {
    console.log("user", result.userInfo);
  })
  .catch((error) => console.log("error", error));

//Promise.all
// function getAllData() {
//   getUser()
//     .then((user) => {
//       return Promise.all([Promise.resolve(user), getPostsByUser(user)]);
//     })
//     .then(([user, posts]) => {
//       console.log("User:", user);
//       console.log("Posts:", posts);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// getAllData();
