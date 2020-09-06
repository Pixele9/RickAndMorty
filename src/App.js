import React, { useEffect, useState } from "react";
import "./styles.css";

import Character from "./components/card";
import Navbar from "./components/navbar";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAPI().then((resp) => {
      setCharacters(resp.results);
    });
  }, []);

  const filteredChars = characters.filter((char) => {
    return char.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  const getAPI = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    return await fetch(url).then((result) => result.json());
  };

  return (
    <div className="App">
      <Navbar value={searchValue} onChange={(value) => setSearchValue(value)} />
      {filteredChars.map((character) => {
        return (
          <Character
            key={character.id}
            img={character.image}
            name={character.name}
            origin={character.origin.name}
          />
        );
      })}
    </div>
  );
}
