import React, { useState } from "react";
import uuid from "uuid/v9"; // install package for create defrent id (npm install uuid)

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gosip", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuid() }]);
  };

  return (
    <div className="Song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
