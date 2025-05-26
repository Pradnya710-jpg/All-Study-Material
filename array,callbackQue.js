const { rejects } = require("assert");
const fs = require("fs");

let input = [1, [2, [3, 4], 5]];

function flatten(array) {
  return array.reduce((acc, value) => {
    return acc.concat(Array.isArray(value) ? flatten(value) : value);
  }, []);
}

// function recursion(array) {
//   let newInput = [];
//   array.map((ele) => {
//     if (Array.isArray(ele)) {
//       newInput = newInput.concat(recursion(ele));
//     } else {
//       newInput.push(ele);
//     }
//   });

//   return newInput;
// }
// recursion(input);

// console.log("flatten array", input.flat(Infinity));

// const arr = ["hello", "world"];
// let result = arr.flatMap((ele) => ele.split(""));
// console.log("flat array", result);

// const sentences = ["hi there", "hello world"];

// console.log(
//   ".......setenresult",
//   sentences.map((s) => s.split(" "))
// );

// console.log(
//   ".......setenresult",
//   sentences.flatMap((s) => s.split(" "))
// );

let elements = [1, 3, 1, 3, 2, 1, 3, 3];
let eleObj = {};

function reduceElements(elements) {
  let obj = {};
  let mostFrequent = elements[0];
  let maxCount = 0;
  elements.reduce((acc, value) => {
    obj[value] = (obj[value] || 0) + 1;
  }, {});

  return obj;
}

reduceElements(elements);
// elements.forEach((ele) => {
//   if (eleObj[ele]) {
//     eleObj[ele] += 1;
//   } else {
//     eleObj[ele] = 1;
//     // eleObj[ele] = ele;
//   }
//   //   console.log("eleObj", eleObj);
//   return eleObj;
// });
// console.log("eleObj", eleObj);

// let maxNo = 0;
// let mostFrequent = null;
// for (let no in eleObj) {
//   if (eleObj[no] > maxNo) {
//     maxNo = eleObj[no];
//     mostFrequent = no;
//   }
// }
// console.log("mostFrequent", mostFrequent);

///Group By

let groupData = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "nonveg", name: "chicken" },
  { type: "fruit", name: "pineapple" },
  { type: "veg", name: "rice" },
];

let newGroupData = {};

groupData.filter((data) => {
  if (newGroupData[data.type]) {
    newGroupData[data.type].push(data);
  } else {
    newGroupData[data.type] = [data];
  }
});
// console.log("newGroupData", newGroupData);

///callback

// function greet(name, callback) {
//   let timerId;
//   let callOnce = 0;

//   setTimeout(() => {
//     console.log("hey how are you", name);
//   }, 1000);

//   timerId = setInterval(() => {
//     console.log("Running...", callOnce);
//     callOnce++;
//     if (callOnce === 1) {
//       clearInterval(timerId);
//       callback();
//       console.log("Interval stopped!");
//     }
//   }, 400);
// }
// const newFun = () => {
//   console.log("inside a fun call");
// };

// greet("pradnya", newFun);

//callback hell

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, username: "pradnya" }), 1000);
  });
}

function fetchPosts(username) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ username, postTitle: "My First Post" }), 1000);
  });
}

function fetchComments(postTitle) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ postTitle, comments: ["Nice!", "Cool!"] }),
      1000
    );
  });
}

// Using Promises
fetchUser(10)
  .then((user) => {
    console.log("User fetched:", user);
    return fetchPosts(user.username);
  })
  .then((post) => {
    console.log("Post fetched:", post);
    return fetchComments(post.postTitle);
  })
  .then((comments) => {
    console.log("Comments fetched:", comments);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

//File reading
// fs.readFile("readFile.txt", "utf-8", (result, err) => {
//   if (result) {
//     console.log("File read", result);
//   } else {
//     console.log("err", err);
//   }
// });

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(path, "utf-8", (err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    }, 2000);
  });
}

readFilePromise("readFile.txt")
  .then((result) => console.log("result", result))
  .catch((err) => console.log("error while reading", err));
