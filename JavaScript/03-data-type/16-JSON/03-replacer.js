// excluding and transforming : replacer

let room = {
  number :23
};
let meetup = {
  title : "Conference",
  participants : [{ name : "John"},{name :"Alice"}],
  place : room // meetup references room
};

room.occupiedBy = meetup;   // room refrences meetup
console.log(JSON.stringify(meetup,['title', 'participants']));
//  {"title":"Conference","participants":[{},{}]}



  /** */ console.log("--------------------------------------------------------------");

  let room2 = {
    number : 23
  };
  let meetup2 ={
    title :"Conference",
    participants :[{name : "John"}, {name : "Alice"}],
    place : room2 // meetup references room
  };

  room2.occupiedBy = meetup2; // room refrences meetup
  console.log(JSON.stringify(meetup2,['title','participants','place', 'name', 'number']));

  /*
  {"title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}}
  */



    /** */ console.log("--------------------------------------------------------------");
    let room3 = {
      number: 23
    };
    
    let meetup3 = {
      title: "Conference",
      participants: [{name: "John"}, {name: "Alice"}],
      place: room3 // meetup references room
    };
    
    room3.occupiedBy = meetup3; // room references meetup
    
    console.log( JSON.stringify(meetup3, function replacer(key, value) {
      console.log(`${key}: ${value}`);
      return (key == 'occupiedBy') ? undefined : value;
    }));

    /*
    : [object Object]
title: Conference
participants: [object Object],[object Object]
0: [object Object]
name: John
1: [object Object]
name: Alice
place: [object Object]
number: 23
occupiedBy: [object Object]
{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
    */
    