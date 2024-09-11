const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("respnose", (name, id) => {
  console.log(`Data recieved user ${name} with id: ${id}`);
});
customEmitter.on("respnose", () => {
  console.log(`Some other logic here`);
});
customEmitter.emit("respnose", "MAX", "22");
