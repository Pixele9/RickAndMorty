import React, { useEffect, useState } from "react";
import "./styles.css";

import Character from "./components/card";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAPI().then((resp) => setCharacters(resp.results));
  }, []);

  const getAPI = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    return await fetch(url).then((result) => result.json());
  };

  return (
    <div className="App">
      {characters.map((character) => {
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
