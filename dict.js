let array = [
  {
    id: 101,
    name: "Alice",
    age: 22,
    grade: "A",
    subjects: ["Math", "Science"],
  },
  { id: 102, name: "Bob", age: 23, grade: "B", subjects: ["History", "Math"] },
  {
    id: 103,
    name: "Charlie",
    age: 21,
    grade: "A",
    subjects: ["English", "Math"],
  },
  {
    id: 104,
    name: "David",
    age: 24,
    grade: "C",
    subjects: ["Science", "History"],
  },
  { id: 105, name: "Eva", age: 22, grade: "B", subjects: ["Math", "English"] },
  {
    id: 106,
    name: "Frank",
    age: 23,
    grade: "A",
    subjects: ["History", "Math"],
  },
];
let output = [];
for (const element of array) {
  output.push(...element.subjects);
}

let Objects = {};
let uniqueSubjects = [...new Set(output)];
console.log(uniqueSubjects);

uniqueSubjects.forEach((sub) => {
  Objects[sub] = [];
  array.forEach((ele) => {
    if (ele.subjects.includes(sub)) {
      Objects[sub].push(ele.name);
    }
  });
});
// console.log(Objects);

// duplicate element remove
let allArray = [1, 2, 3, 3, 3, 4, 5, 5, 5, 3, 2, 2];
let uniqueArray = new Set(allArray);
// console.log("unique", uniqueArray);

let numbers = [1, 2, 3, 4, 55, 666, 23, 34];
///console.log("............", Math.max(...numbers));
//without spread
const fruits = ["Banana", "Apple", "Orange", "Grapes", "Mango"];
fruits.sort();
//console.log("..........fruite", fruits);
fruits.sort((a, b) => {
  let value = b.localeCompare(a);
  console.log("vale", value);
  return value;
});
