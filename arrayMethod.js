//Pop Method
let array = ["Banana", "Apple", "Orange", "Mango", "Papaya", "Coconut"];
array.push("Grapes"); //add last

array.pop("Grapes");
console.log("array", array);

const arr = [10, 20, 30];
console.log(arr.at(-1));

// findInex

const numbers = [10, 20, 30, 40, 55];
let index = numbers.findIndex((ele) => ele === 40);
console.log("index", index);

let some = numbers.some((ele) => ele % 2 === 0);
console.log("some", some);

let every = numbers.every((ele) => ele % 2 === 0);
console.log("every", every);

// sorting
const numberingSort = [40, 1, 5, 200];

let sorting = numberingSort.sort((a, b) => a - b);
console.log("sorting", sorting);

//7. Combining and Slicing

// Array.prototype.concat(array);
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("concat", arr1.concat(arr2));

//slice
