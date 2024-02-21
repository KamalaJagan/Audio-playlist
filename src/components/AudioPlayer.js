import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ currentAudio, onAudioEnd }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentAudio) {
      audioRef.current.src = URL.createObjectURL(currentAudio);
      audioRef.current.play();
    }
  }, [currentAudio]);

  return (
    <audio ref={audioRef} onEnded={onAudioEnd} controls className="ml-7" />
  );
};

export default AudioPlayer;
