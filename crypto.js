const fs = require("fs");
const cryoto = require("crypto");
const hash = cryoto.createHash("sha256").update("").digest("binary");

// fs.readFile("readFile.txt", "utf-8", (err, data) => {
//   if (err) return console.error(err);
//   console.log("File 1 read");
//   fs.readFile("readFile.txt", "utf-8", (err, data) => {
//     if (err) return console.error(err);
//     console.log("File 1 read");
//     fs.readFile("readFile.txt", "utf-8", (err, data) => {
//       if (err) return console.error(err);
//       console.log("File 1 read");
//     });
//   });
// });
function fetchData(callback) {
  callback("Data received");
}

// try {
//   const result = fetchData((data) => console.log("data", data));
//   console.log(result);
// } catch (e) {
//   console.log("Error:", e.message);
// }

function dataFetech(callback) {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      let data = false;
      if (data) {
        callback(data);
        resolve(data);
      } else {
        reject("not get");
      }
    }, 1000);
  });
}

dataFetech((data) => {
  console.log("Callback received:", data); // ✅ callback output
})
  .then((result) => {
    console.log("Promise resolved:", result); // ✅ promise output
  })
  .catch((error) => {
    console.log("Error:", error);
  });
