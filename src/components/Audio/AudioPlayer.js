import React, { useEffect, useState } from 'react';

import './style.css';
import useAudio from "./useAudio";
// import TimeBar from "./TimeBar";
import PlaybackButton from "./PlaybackButton";

const AudioPlayer = ({ urls }) => {
    // console.log(url);
    const rnd = Math.floor(Math.random() * urls.length);
    const [audioElement, audioProps] = useAudio(urls, urls[3]);

    // useEffect(() => {
        
    // }, [url]);

    return (
        <div className="audio-player">
            {audioElement}

            {audioProps.isLoading ? (
                <div style={{ color: "white" }}>...</div>
            ) : (
                <div className="controls">
                    <PlaybackButton
                        onClick={audioProps.togglePlaybackStatus}
                        playbackStatus={audioProps.playbackStatus}
                    />
                
                </div>
            )}
        </div>
    );
}

export default AudioPlayer;