//related memory
let a = [];
let b = [];

// console.log(a == b); //Memeory diff both
// console.log(a === b);

//Copy same array and memory
let c = [];
let d = c;

// console.log(c == d);
// console.log(c === d);

let arr = [20];
let arrr2 = [20];
// console.log("arr", arr[0] === arrr2[0]);
// console.log("arr", arr[0] == arrr2[0]);
let z = [1, 2, 3, 4];
let a1 = { name: "anil" };
// console.log(">>>>>>>>>", ...z);

// console.log(">>>>>>>>>", typeof NaN);

let data = 10 + -10;
// console.log("data", data);

let data1 = { name: "prad" };
// console.log("data>>>>>", delete data1.name);

const newData = ["Peter", "anil", "sam"];
const [y, x, x1] = newData;
// console.log("y", [x, y, x1]);

let dataRes = { name: "Pradnya", age: 10, skill: "Js" };
let dataRes1 = { city: "Pune", mail: "prad@gmail.com" };

let { name, age, skill } = dataRes;

// console.log(">>>>>>>>", { ...dataRes, ...dataRes1 });
// console.log(">>>>>>>", Object.assign({}, dataRes, dataRes1));

const nameNew = "Pradnua";
// console.log(">>>>", nameNew());

const result = false || NaN || null;
// console.log("resut", result);

// Promise.reject("Oops! Something went wrong")
//   .finally(() => console.log("resolved"))
//   .then((result) => console.log("result:", result))
//   .catch((err) => console.log("error", err));

let array = [
  { name: "Pradnya", gender: "Male" },
  { name: "pal", gender: "Female" },
  { name: "Pradu", gender: "female" },
  { name: "Praju", gender: "Other" },
];

let newFilterArray = [];

array.forEach((ele) => {
  if (ele.gender === "Male") {
    return;
  } else {
    array.splice(1, 3);
  }
});
console.log("newFilterArray", array);
