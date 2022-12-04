import React, { useEffect, useState } from 'react';

function useAudio(urls) {
  const audioRef = React.useRef(null);

  const [urlState, setUrlState] = useState(urls[0]);

  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [playbackStatus, setPlaybackStatus] = React.useState("pause");
  const [isLoading, setLoading] = React.useState(true);
  const [isSeeking, setSeeking] = React.useState(false);

  function playNext() {
    // audioRef.current.currentTime = 0;
    // setPlaybackStatus("play");
    // random from urls
    const random = Math.floor(Math.random() * urls.length);
    setUrlState(urls[random]);
  }

  return [
    <audio
      onLoadedData={() => {
        // setPlaybackStatus("play");
        setLoading(false);
        setDuration(audioRef.current.duration);
      }}
      onSeeking={() => setSeeking(true)}
      onSeeked={() => setSeeking(false)}
      onEnded={() => playNext()}
      src={urlState}
      ref={audioRef}
      onTimeUpdate={() => {
        setCurrentTime(audioRef.current.currentTime);
      }}
      hidden
    />,
    {
      currentTime,
      duration,
      playbackStatus,
      isSeeking,
      isLoading,
      progress: (currentTime / duration) * 100,
      setTime: seconds => {
        audioRef.current.currentTime = seconds;
      },
      togglePlaybackStatus: () => {
        if (playbackStatus === "play") {
          audioRef.current.pause();
          setPlaybackStatus("pause");
        }
        if (playbackStatus === "pause") {
          audioRef.current.play();
          setPlaybackStatus("play");
        }
      }
    }
  ];
}

export default useAudio;
