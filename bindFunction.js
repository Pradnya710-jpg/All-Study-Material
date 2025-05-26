function sayHello() {
  console.log("inside the sayHello", this.name);
}

const object = {
  name: "Pradnya",
};

let functionBind = sayHello.bind(object);
// functionBind();

// we use arrow function in the settimeout  this keyword
let newObject = {
  name: "Pradnya",
  greet: function () {
    setTimeout(() => {
      console.log("Hello,", this.name);
    }, 1000);
  },
};
// newObject.greet();
newObject.greet();
