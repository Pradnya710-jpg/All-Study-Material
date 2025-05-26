const people = [
  { name: "Kyle", age: "28" },
  { name: "Sally", age: "30" },
  { name: "Kyle", age: "28" },
  { name: "John", age: "43" },
  { name: "Sally", age: "40" },
];

let obj = {};
people.map((ele) => {
  if (obj[ele.name]) {
    obj[ele.name].push(ele);
  } else {
    obj[ele.name] = [ele];
  }
});

const groupBy = people.reduce((group, person) => {
  if (group[person.name] == null) {
    group[person.name] = [];
  }
  group[person.name].push(person);
  return group;
}, {});
console.log("group", obj);
