import React, { useRef, useState } from "react";

export default function Title({
  isAbsolute,
  isBirthday,
  mp3,
  text = "Eilmoon",
}) {
  const music = useRef();
  const [play, setPlay] = useState(false);

  const changeMusicStatus = () => {
    if (!play) {
      console.log("change");
      music?.current?.play();
      setPlay(true);
      music.current.volume = 0.02;
    } else {
      music?.current?.pause();
      setPlay(false);
    }
  };
  const handleMusicEnded = () => {
    music.current.currentTime = 0;
    music.current.play();
  };
  return (
    <div className="titleWrapper">
      <div
        className={`${!isBirthday && "title"} ${
          isAbsolute ? "titleAbsolute" : isBirthday ? "birthday" : ""
        }`}
        onClick={changeMusicStatus}
      >
        {text}
      </div>
      <audio
        controls
        src={mp3}
        ref={music}
        style={{ display: "none" }}
        onEnded={handleMusicEnded}
      ></audio>
    </div>
  );
}
