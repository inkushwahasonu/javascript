
// Nested setTimeout 

// there are two ways of running something regularly. 
/**
 * one is " setInterval "
 * another is " setTImeOut "
 * 
 */


 // Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

 /*

 Let’s compare two code fragments. The first one uses setInterval:

let i = 1;
setInterval(function() {
  func(i++);
}, 100);
The second one uses nested setTimeout:

let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
For setInterval the internal scheduler will run func(i++) every 100ms:





Did you notice?

The real delay between func calls for setInterval is less than in the code!

That’s normal, because the time taken by func's execution “consumes” a part of the interval.

It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.

In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.

In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

And here is the picture for the nested setTimeout:


The nested setTimeout guarantees the fixed delay (here 100ms).

That’s because a new call is planned at the end of the previous one.

Garbage collection and setInterval/setTimeout callback
When a function is passed in setInterval/setTimeout, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it.

// the function stays in memory until the scheduler calls it
setTimeout(function() {...}, 100);
For setInterval the function stays in memory until clearInterval is called.

There’s a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.


 */