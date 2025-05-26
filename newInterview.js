let fs = require("fs");
console.log("Hey");
setTimeout(() => {
  console.log("in the settimeout");
});
setImmediate(() => {
  console.log("................");
}, 1000);

let readFile = fs.readFile("readFile", "utf-8", () => {
  console.log("read file");
});
//prmises
console.log();

function newfun() {}

setTimeout(() => {
  for (const element of object) {
  }
});
