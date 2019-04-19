const fs = require("fs");

fs.readFile("./tmp/hello.txt", { encoding: "utf8" }, (err, content) => {
  if (err) return console.error(err);
  console.log(content);
});
