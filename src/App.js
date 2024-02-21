import React, { useState, useEffect } from "react";
import FileUploader from "./components/FileUploader";
import Playlist from "./components/Playlist";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const handleFileUpload = (file) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, file]);
  };

  const handlePlayNext = (index) => {
    setCurrentAudioIndex(index);
  };

  const handleAudioEnd = () => {
    if (currentAudioIndex < playlist.length - 1) {
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
    localStorage.setItem(
      "currentAudioIndex",
      JSON.stringify(currentAudioIndex)
    );

    return () => {};
  }, [playlist, currentAudioIndex]);

  useEffect(() => {
    try {
      const storedPlaylist = JSON.parse(localStorage.getItem("playlist")) || [];
      const storedIndex =
        JSON.parse(localStorage.getItem("currentAudioIndex")) || 0;

      setPlaylist(storedPlaylist);
      setCurrentAudioIndex(storedIndex);
    } catch (error) {
      console.error("Error loading data from local storage:", error);
    }
  }, []);

  return (
    <div className=" justify-items-center">
      <FileUploader onFileUpload={handleFileUpload} />
      <AudioPlayer
        currentAudio={playlist[currentAudioIndex]}
        onAudioEnd={handleAudioEnd}
      />
      <Playlist playlist={playlist} onPlayNext={handlePlayNext} />
    </div>
  );
};

export default App;
