//Assigning a function to a variable:
function greet(name) {
  return `Hello${name}`;
}
let greetValue = greet; // assign the fun to variable
// console.log("greetValue", typeof greetValue);
console.log("gree", greetValue("Pradnya"));

//Passing a function as an argument:

function performAction(fun, value) {
  return fun(value);
}
const addFun = (number) => {
  return number + number;
};

console.log("............", performAction(addFun, 10));

function outerFun(greeting) {
  console.log("greeting", greeting);
  return function innerFun(name) {
    console.log("in the inner fun", name);
    return `${greeting}${name}`;
  };
}

const sayHello = outerFun("HEllo");

console.log("console", sayHello("Pradnya"));
