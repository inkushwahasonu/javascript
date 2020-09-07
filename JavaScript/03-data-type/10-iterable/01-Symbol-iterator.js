



// Symbol.itrator
/** */ console.log('-------------------------------01------------ Symbol.itrator-------------------------------');

let range = {
  from : 1,
  to : 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function (){
  // ...... it returns the itrator object :
  // 2. Onword, for..of works only with this itrator, asking it for next values
  return {
    current : this.from,
    last : this.to,

    // 3. next() is called on each iteration by the for..of loop
    next(){
      // 4. it should return the value as an object { done :....., vslue : ...}
      if ( this.current <= this.last){
        return{ done : false, value : this.current++};
      }else{
        return{done : true};
      }
    }
  };
};

// now it works !

for ( let num of range){
  console.log(num);        // 1, 2, 3, 4, 5
}




/** */ console.log("--------------------------------------------------");

let range2 = {
  from : 1,
  to : 5,
  [Symbol.iterator](){
    this.current = this.from;
    return this;
  },
  next() { 
    if ( this.current<=this.to){
      return{done : false, value : this.current++};
    }else{
      return{done : true};
    }
  }
};

for ( let num2 of range2){
  console.log(num2);              // 1, 2, 3, 4, 5
}




// String is itrable
/** */ console.log('-------------------------------02----------------- String is itrable-------------------------------');


for (let char of "test"){
  // triggers 4 times : once for each charcter
  console.log(char);    // t, e, s, t 
}




/** */ console.log("--------------------------------------------------");


let str = '𝒳😂';
for ( let char of str){
  console.log(char);       /// 𝒳 , 😂
}




//Calling an iterator explicitly 
/** */ console.log('-------------------------------03----------------- Calling an iterator explicitly ------------------------------');

let str2 = "Hello";

// does not same as
// for ( let char of str) {console.log(char);}

let iterator = str2[Symbol.iterator]();
while (true){
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);     // outputs characters one by one
}