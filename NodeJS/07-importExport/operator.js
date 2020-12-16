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

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// or

module.exports = { add, sub, mult };
