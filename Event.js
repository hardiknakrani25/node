const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("sum", (x, y) => {
  console.log(x + y);
});

eventEmitter.emit("sum", 5, 5);
