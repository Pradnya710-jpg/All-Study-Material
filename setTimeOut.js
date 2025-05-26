const fs = require("fs");
function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(">>>>>i", i);
    }, i * 1000);
  }
}

a();

function a() {
  for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function log() {
        console.log(">>>>>i", j + 1);
      }, j * 1000);
    })(i);
  }
}

// a();

console.log("start");

process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log(">>> setImmediate");
});

fs.readFile("readFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("data", data);
  }
});
console.log("end......");

// Output:
// start
// end
// nextTick
