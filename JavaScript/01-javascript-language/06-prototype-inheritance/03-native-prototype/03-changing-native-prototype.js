// changing native prototype

String.prototype.show = function () {
  console.log(this);
};

"BOOM!".show(); // BOOM!

// in modern programmin, there is only one case where modifying native prototypes is approved.
// That's polyfilling.

if (!String.prototype.repeat) {
  // if there's no method
  // add it to the prototype
  String.prototype.repeat = function (n) {
    // repeat the string n times

    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}
console.log("La".repeat(4)); // LaLaLaLa
