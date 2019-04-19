const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello server");
});

server.listen(7000, () => console.log("Server is Started on 7000"));
