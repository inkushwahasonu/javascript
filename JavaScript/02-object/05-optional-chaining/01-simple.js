// let user = {};  // the user happens to be without address
// console.log(user.address.street);  // error




//     optional chaining 
/******** */ console.log("----------------01--------------- ( ?. ) optional chaining--------------------------");

// let user = {};    /// user hase no properties
// console.log(user?.address?.street);    // error


// /** */ console.log("---------------------------------------")
// let user = null;

// console.log(user.address);  // error         address is undefined
// console.log(user?.address.street)   // error



/** */ console.log("-------------02   ------------------- user uses --------------------------")


let user1 = {
firstName: " sonu"
};
let user2  = null;
let key = " firstName";

console.log(user1?.[key]);      // error
console.log(user2?.[key]);       //error