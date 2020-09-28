// JSON methods, toJSON
/*** */ console.log("------------------------------------01---JSON methods toJSON--------------");

let user = {
  name : "John",
  age : 30,
toString(){
  return `{name : "${this.name}", age :${this.age}}`;
}
};

console.log(user);   // { name : "john", age : 30}