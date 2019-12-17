import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import CharacterCard from './CharacterCard'; 
import styled from 'styled-components';

const Search = styled.div `
  // border: 2px solid red;
  padding: 20px;
  background: darkcyan;
  color: white;
  display: felx;
  flex-flow: column;
  justify-content: center;
 `; 

 const Form = styled.div `
  text-align: center;
  // border: 2px solid orange;
  height: 50px;
  margin: 0 100px;
 `; 

 const Data = styled.div `
//  border: 2px solid orange;
//  padding: 20px;
//  margin: 30px;
//  // background: darkcyan;
//  // color: white;
//  display: felx;
// //  flex-flow: column wrap;
//  justify-content: center;
`; 

export default function SearchForm() { 
  // const [dataResult, setDataResult] = useState([]); 
  
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};

  return (
    <Search>
     <Form>
       <label htmlFor='searchField'>Search: </label>
       <input 
          id="name"
          type="text"
          name="serachField"
          placeholder="Search"
          onChange={handleInputChange}
          value={query}
        />
     </Form>
    <Data>
      {data.map(characters => {
        return (
          <CharacterCard
            key = {characters.id}
            name = {characters.name}
            img = {characters.image}
            gender = {characters.gender}
            species = {characters.species}
            status = {characters.status}
          />
        );
      })}
    </Data>
     
    </Search>
  );
}
