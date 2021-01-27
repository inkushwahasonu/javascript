import React, { useState } from "react";
import  uuid from "uuid"; // install package for create defrent id (npm install uuid)
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gosip", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div className="Song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
<NewSongForm addSong = {addSong}/>

    </div>
  );
};

export default SongList;
