import "./App.css";
import LinksInfo from "./components/LinksInfo/LinksInfo";
import { Flowers } from "./components/Flowers/Flowers";
import BirthDay from "./components/BirthDay/BirthDay";

function App() {
  const date = new Date();
  const isWomanDay = date.getMonth() === 2 && date.getDate() === 8;
  const isBirthday = date.getMonth() === 2 && date.getDate() === 24;
  if (isWomanDay) {
    return <Flowers />;
  }
  if (isBirthday) {
    return <BirthDay />;
  }
  return <LinksInfo />;
}

export default App;
