//A function that receives another function as an argument or that returns a new function or both is called Higher-order function
let arrowFun = function (name) {
  return function (a) {
    console.log(`Welcome  ${name}`);
  };
};

let output = arrowFun("Prad");
output();
console.log(typeof output);

//First - class

let FirstClass = () => {
  console.log("inside arorow function");
};
FirstClass();
