import React, { useRef, useState } from "react";

export default function Title({ isAbsolute, mp3 }) {
  const music = useRef();
  const [play, setPlay] = useState(false);

  const changeMusicStatus = () => {
    if (!play) {
      music?.current?.play();
      setPlay(true);
      music.current.volume = 0.02;
    } else {
      music?.current?.pause();
      setPlay(false);
    }
  };
  return (
    <div className="titleWrapper">
      <div
        className={`title ${isAbsolute ? "titleAbsolute" : ""}`}
        onClick={changeMusicStatus}
      >
        Eilmoon
      </div>
      <audio controls src={mp3} ref={music} style={{ display: "none" }}></audio>
    </div>
  );
}
