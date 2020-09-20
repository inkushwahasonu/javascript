
// accessor descriptors
// descriptor for accessor properties ar different from  those for data properties.


// accessor descriptor may have
/**
 * get – a function without arguments, that works when a property is read,
 * set – a function with one argument, that is called when the property is set,
 * enumerable – same as for data properties,
 * configurable – same as for data properties.
 */



 let user = {
   name : "John",
   surname : "Smith"
 };

 Object.defineProperty(user, 'fullName',{
   get(){
     return `${this.name} ${this.surname}`;
   },
   set(value){
     [this.name, this.surname] = value.split(" ");
   }
 });

 console.log(user.fullName); // John Smith

 for(let key in user) console.log(key);    // name, surname



 /**** */ console.log("--------------------------------------------------");


 // error  :  Invalid property descriptor
 /*
 Object.defineProperty({}, 'prop', {
   get() {
     return 1
   },
   value : 2
 });
 
 */