
// basicaly in microtasks Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.
/*
let promise =Promise.resolve();
promise.then(() => console.log("promise done!"));
 console.log("code finished");   // this message show first
*/

// but but but but

// microtasks queue


// Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (ES8 term).

// as started in the specification :
/**
 * the queue is first-in-first-out : tasks enqueued first are run first.
 * exicution of a task is initiated only when nothing else is runing.
 */




 // what if the order metters for us ? How can we make code finished run after promise done ?


 // Easy, just put it into the queue with  .then :

 Promise.resolve()
 .then(() => console.log("promise done!"))
 .then(() => console.log("code finished"));