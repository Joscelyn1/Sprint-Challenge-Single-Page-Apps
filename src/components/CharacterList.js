import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        // 20 characters
        //console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  const arrayCharacters = Array.from(characters);

  return (
    <section className="character-list grid-view">
      {arrayCharacters.map(character => (
        <CharacterCard
          key={character.name}
          name={character.name}
          species={character.species}
          status={character.status}
          location={character.location.name}
          origin={character.origin.name}
          image={character.image}
        />
      ))}
    </section>
  );
}
