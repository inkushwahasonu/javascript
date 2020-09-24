
// microtasks 
/**
 *  promise handlers     .then/ .catch/ .finally are always asynchronous.
 * 
 * Even when a Promise is immediately resolved, the code on the lines below
   .then/ .catch/ .finally  will still execute before these handlers.
 */
// demo 



let promise =Promise.resolve();
promise.then(() => console.log("promise done!"));
 console.log("code finished");   // this message show first