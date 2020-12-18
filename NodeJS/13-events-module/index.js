
const EventEmitter = require("events");  // create a class for Events module 

const event = new EventEmitter();        // create object of events class

event.on("sayMyName", () => {                    // lestning of event
  console.log("your name is sonu");
});
event.on("sayMyName", () => {                    // lestning of event
  console.log("your name is kumar");
});
event.on("sayMyName", () => {                    // lestning of event
  console.log("your name is kushwaha");
});

event.emit("sayMyName")                 // create/fire event
