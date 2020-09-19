// arrow function have no "this"
//As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is taken from the outside.

let group = {
  title : "Our Group",
  students : ["John", "pete", "Alice"],

  showList(){

    this.students.forEach(
    student => console.log(this.title + ' : ' + student)
    );
  }
};
group.showList();



/*** */ console.log("---------------------------------------------------------------");

let group2 = {
  title : "Our Group",
  students : ["Sohan" , "Mohit", "Alice"],
  showList(){
    this.students.forEach(function(student){
      // Error : Cannot read property 'title' of undefined
      console.log(this.title + ' : ' + student)
    });
  }
};
group2.showList();