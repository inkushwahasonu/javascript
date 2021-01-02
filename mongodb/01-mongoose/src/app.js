const mongoose = require("mongoose");

//connection creation
mongoose
  .connect("mongodb://localhost:27017/sonudata", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connection successfull"))
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
