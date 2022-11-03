import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    fetch("https://api.tibiadata.com/v3/worlds")
      .then((res) => res.json())
      .then((returnedData) => {
        // setData(returnedData.guilds.guild);
        setWorlds(() => returnedData.worlds["regular_worlds"]);
      });
  }, []);
  const payload = {
    worlds: worlds,
    characters: characters,
    getCharsFromGuild(e) {
      setCharacters(() => e);
    },
  };

  return (
    <>
      <Header {...payload} />
      <Main characters={characters} />
      <Footer />
    </>
  );
}

export default App;
