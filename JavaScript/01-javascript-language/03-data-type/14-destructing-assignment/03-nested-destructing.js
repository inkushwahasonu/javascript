let options1 = {
  size : {
    width : 100,
    height : 200
  },
  items : ["Cake", "Donut"],
  extra : true
};

// destracting assignment split in multiple lines for clarity
let {
  size : { // put size here
  width,
height
},
items : [item1, item2],  // assign items here
title = "Menu"   // not present in the object (default value is used)
} = options1;

console.log(title);   // menu
console.log(width);   // 100
console.log(height);  // 200
console.log(item1);   // Cake
console.log(item2);   // Donut