const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("name", () => {
  console.log("Hardik");
});

eventEmitter.emit("name");
