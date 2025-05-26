function greet(greeting, punc) {
  let message = `${greeting} ,${this.name} ${punc}`;

  return message;
}

let person = { name: "Yash", age: "22" };
greet.call(person, "Hello", "!");
greet.apply(person, ["Hello", "!"]);
let greetingBind = greet.bind(person, "HEllo", "!");
greetingBind();

let Object = {
  name: "Pradnya",
  greet: function () {
    console.log(`Hello this is,${this.name}`);
  },
  newGreet: () => {
    console.log(`Hello this is,${this.name}`);
  },
};

let bindGreetnew = Object.greet.bind(Object);

let bindGreet = Object.newGreet.bind(Object);
bindGreet();

let array = [1, 2, [3, 4, 5, [1, 2, 3]]];
let newArray = array.flat(1);
console.log("newArray", newArray);
