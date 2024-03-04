import React, { useRef, useState } from "react";
import mp3 from "../../love.mp3";
import Title from "../Title/Title";

export default function LinksInfo() {
  return (
    <div className="containerApp">
      <Title />
      <div className="button">
        <a href="https://instagram.com/eilmoon" target="blank" className="link">
          inst
          <img src="heart.png" alt="" className="heart" />
        </a>
      </div>
      <div className="button">
        <a
          href="https://t.me/+a3EyxtojIfEyMzli"
          target="blank"
          className="link"
        >
          tg
        </a>
      </div>
      <div className="button">
        <a
          href="https://www.donationalerts.com/r/eilmoon"
          target="blank"
          className="link"
        >
          donationalerts
        </a>
      </div>
    </div>
  );
}
