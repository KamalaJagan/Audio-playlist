import React from "react";

const Playlist = ({ playlist, onPlayNext }) => {
  return (
    <div>
      <ul className="px-10 mt-5 sm:mr-10">
        {playlist.map((audio, index) => (
          <li
            className="py-2 cursor-pointer"
            key={index}
            onClick={() => onPlayNext(index)}
          >
            {audio.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
