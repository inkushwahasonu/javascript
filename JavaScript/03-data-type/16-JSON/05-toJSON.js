let room = {
  number : 23
};

let meetup = {
  title : "Conference",
  date : new Date(Date.UTC(2017, 0, 1)),
  room
};

console.log(JSON.stringify(meetup));

/*
{
  "title":"Conference",
  "date":"2017-01-01T00:00:00.000Z",
  "room":{"number":23}
}
*/

/***** */  console.log("---------------------------------------------------------");

let room2 = {
  number : 23,
  toJSON() {
    return this.number;
  }
};
let meetup2 = {
  title : "Conference",
  room
};

console.log(JSON.stringify(room2)); // 23
console.log(JSON.stringify(meetup2));

/*
  
  23
{"title":"Conference","room":{"number":23}}
  
*/

