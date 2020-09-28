
// proxy != target

// the proxy and the original object are different objects. That's natural, risht?

let allUsers = new Set();
class User {
  constructor(name){
    this.name = name;
    allUsers.add(this);
  }
}

let user = new User("John");
console.log(allUsers.has(user));   // true
user = new Proxy(user, {});
console.log(allUsers.has(user));   // false