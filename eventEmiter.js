const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// myEmitter.on("greet", (name) => {
//   console.log("Hello Inside a greet", `${name}`);
// });

// const greet = (name) => console.log(`Hello ,${name}`);

// myEmitter.on("greet", greet);
// myEmitter.emit("greet", "Pradnya");

// myEmitter.emit("greet", "Pradnya");
// myEmitter.emit("greet", "Praju");

// let pradnya = (name) => {
//   console.log("Hello ", name);
// };

// myEmitter.on("Pradnya", pradnya);
// myEmitter.emit("Pradnya", "pradnya");
let count = 0;
let maxCount = 2;
myEmitter.on("event1", function () {
  console.log(".......event1 fired");
  myEmitter.emit("event2");
});
myEmitter.on("event2", function () {
  console.log(".......event1 fired");

  count++;
  if (count < maxCount) {
    setImmediate(() => myEmitter.emit("event1"));
  } else {
    console.log("done looping...........");
  }
});

myEmitter.emit("event1");
