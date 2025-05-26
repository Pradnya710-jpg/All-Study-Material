function flattenArray(array) {
  let resultArray = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      resultArray.push(...flattenArray(element));
    } else {
      resultArray.push(element);
    }
  });
  return resultArray;
}

// console.log(flattenArray([1, [2, [3, 4], 5]]));

// function deepCloneArray(arr) {
//   console.log("arr", JSON.stringify(arr));
//   let array = JSON.parse(JSON.stringify(arr));
//   console.log("array", array);

//   return array;

//   // Your implementation here
// }
function deepCloneArray(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newObj[key] = deepCloneArray(obj[key]);
  }
  return newObj;
}

const original = [{ a: 1 }, { b: 2 }];
const cloned = deepCloneArray(original);

cloned[0].a = 20;
console.log("original", original);

function customMap(array, callback) {
  let newResult = array.map(callback);
  return newResult;
}
const numbers = [1, 2, 3];
const squared = customMap(numbers, (num) => num * num);

let array = [];

let a = 5.4;

function groupBy(array, callback) {
  let obj = {};
  array.forEach((ele) => {
    const key = callback(ele);
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(ele);
  });
  return obj;
}
const numbersData = [6.1, 4.2, 6.3];
const grouped = groupBy(numbersData, Math.floor);
console.log(grouped);

function removeDuplicates(array) {
  let unique = [];

  array.forEach((ele) => {
    if (unique.includes(ele)) {
    } else {
      unique.push(ele);
    }
  });
  return unique;
}

const data = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(data));
