import { useRef, useState } from 'react';
import './App.css';
import mp3 from './love.mp3';

function App() {
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
    <div className="container">
      <div className="title" onClick={changeMusicStatus}>
        Eilmoon
      </div>
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

      <audio controls src={mp3} ref={music} style={{ display: 'none' }}></audio>
    </div>
  );
}

export default App;
