import { useRef, useState } from "react";
import "./App.css";
import LinksInfo from "./components/LinksInfo/LinksInfo";
import { Flowers } from "./components/Flowers/Flowers";

function App() {
  const date = new Date();
  const isWomanDay = date.getMonth() === 2 && date.getDate() === 7;
  return <>{!isWomanDay ? <LinksInfo /> : <Flowers />}</>;
}

export default App;
