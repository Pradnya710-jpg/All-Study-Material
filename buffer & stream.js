const fs = require("fs");
fs.readFile("readFile.txt", (err, data) => {
  if (err) throw err;
  console.log("Buffer data:", data.toString()); // Logs buffer
  console.log("Size in bytes:", data.length);
});

const stream = fs.createReadStream("readFile.txt", {
  encoding: "utf8",
  highWaterMark: 16, // chunk size (bytes)
});

stream.on("data", (chunk) => {
  console.log("Chunk received:", chunk);
});
stream.on("end", (chunk) => {
  console.log("Finished reading file.");
});
