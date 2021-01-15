const mongoose = require("mongoose");

//connection creation
mongoose
  .connect("mongodb://localhost:27017/sonudata", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connection successfull...."))
  .catch((err) => console.log(err));

// schema
// A mongoose schema defines the structure of the document,
// default values, validation, etc.,

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  author: String,
  // vodeos: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Amongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validator,etc., whereas a Mongoose model
// Provides an interface to the database for creating,
// Querying, updating, deleting records,etc.

// collection creationst",playlistSchema);
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create / insert a docuent
const createDocument = async () => {
  try{
    const htmlPlaylist = new Playlist({
      name: "html",
      type: "front End",
      videos: 80,
      author: "inkushwahasonu",
      active: true,
    });
    const cssPlaylist = new Playlist({
      name: "css",
      type: "front End",
      videos: 80,
      author: "inkushwahasonu",
      active: true,
    });
    const jsPlaylist = new Playlist({
      name: "javascript",
      type: "Front End",
      videos: 80,
      author: "inkushwahasonu",
      active: true,
    });
    const nodePlaylist = new Playlist({
      name: "Node JS",
      type: "Back End",
      videos: 80,
      author: "inkushwahasonu",
      active: true,
    });
  
    const result = await Playlist.insertMany([htmlPlaylist,cssPlaylist,jsPlaylist,nodePlaylist]);
    console.log(result);
  }catch(err){
    console.log(err);
  }
};
//  createDocument();


const getDocument = async () =>{
  try{
    // const result = await Playlist.find({type:"front End"}).select({name:1}).limit(1);
    
    // comparision operator

    // const result = await Playlist.find({videos:{$gt:50}}).select({name:1}).limit(1);    // for greater than ( gt )
    // const result = await Playlist.find({videos:{$gte:50}}).select({name:1}).limit(1);    // for greater than and equalto( gte )
    // const result = await Playlist.find({videos:{$lt:50}}).select({name:1}).limit(1);    // for less than ( lt )
    // const result = await Playlist.find({videos:{$lte:50}}).select({name:1}).limit(1);    // for less than and equal to ( lte )

    const result = await Playlist.find({type: {$in : ["front End", "Back End"]}}).select({name:1});    // for in operator
    const result = await Playlist.find({type: {$nin : ["front End", "Back End"]}}).select({name:1});    // for n
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in operator



    console.log(result);
  }catch(err){
    console.log(err);
  }
}
getDocument();


