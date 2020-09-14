let user = {
  name : "John",
  age : 25,
  roles : {
    isAdmin : false,
    isEditor : true
  }
};

console.log(JSON.stringify(user, null, 4));


/*
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/


/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/