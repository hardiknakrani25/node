const EventEmitter = require("events").EventEmitter;

class Dog extends EventEmitter {}

class Food {}

let myDog = new Dog();
myDog.on("chew", item => {
  if (item instanceof Food) {
    console.log("Good Dog");
  } else {
    console.log(`Time to buy another ${item}`);
  }
});

myDog.emit("chew", "shoe");
const bacon = new Food();

myDog.emit("chew", bacon);

myDog.on("bark", () => {
  console.log("WHO AT THE DOOR?");
});

myDog.on("chew", takeADeepBreathe);
myDog.on("chew", calmDown);

myDog.removeListener("chew", calmDown);

myDog.once("chew", pet);
