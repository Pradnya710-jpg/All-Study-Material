const http = require("http");

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const server = http.createServer((req, res) => {
  console.log("req", req);
  const url = req.url;
  const method = req.method;
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    if (method == "Get" && url === "/users") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(users));
    }
  });
});

server.listen(2000, () => {
  console.log("Server is running at http://localhost:5000");
});
