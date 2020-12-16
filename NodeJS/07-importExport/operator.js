// //for single function
// const name = "sonu";
// module.exports = name;

const add = (a, b) => {
  return a + b;
};
const sub = (c, d) => {
  return c - d;
};
const mult = (e, f) => {
  return e * f;
};

// module.exports.add1 = add;
// module.exports.sub3 = sub;
// module.exports.mult2 = mult;

// or
//module.exports = { add, sub, mult };

const name = "sonu kumar kushwaha."

module.exports = { add, sub, mult, name };
