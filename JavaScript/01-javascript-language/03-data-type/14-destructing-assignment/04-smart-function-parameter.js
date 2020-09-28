// smart function parameter


// we pass object to function
let options = {
  title : "My menu",
  items : [ "Item1", "Items2"]
};


//  ... and it immediately expands it to variables
function showMenu({title = " Untitled", width = 200, height = 100, items =[]}){
  // title, items - taken from options,
  // width, height - defaults used
  console.log(`${title} ${width} ${height}`);  // My Menu 200 100
  console.log(items); // Item1, Item2
}
showMenu(options);



/**** */ console.log("------------------------------------------------------------------------------------");

let option2 = {
  title : " My menu",
  items : ["item3", "Item4"]
};
function showMenu({
  title = "Untitled",
  width : w = 100,    // width goes to w
  height : h = 200,  // height goes to h
  items : [item3, item4]  // items first element goes to item1, second to item2
})   {
  console.log(`${title} ${w} ${h}`) ; // My menu 100, 200
  console.log(item3);   // item1
  console.log(item4);   // Item2
}
showMenu(option2);







/**** */ console.log("------------------------------------------------------------------------------------");


function showMenu2({title = "Menu", width = 100, height = 200} = {}){
}
showMenu2();