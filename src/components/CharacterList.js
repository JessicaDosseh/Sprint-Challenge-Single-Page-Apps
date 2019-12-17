import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import CharacterCeard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results); 
      })
      .catch(error => console.log(`Error: ${error}`)); 
    },[]);

  return (
    <section className="character-list">
      <h1>The Characters List !!!</h1>

      {character.map(character => {
        return (
          <CharacterCeard 
            key = {character.id}
            name = {character.name}
            img = {character.image}
            gender = {character.gender}
            species = {character.species}
            status = {character.status}
          />
        ); 
      })}
    </section>
  );
}
