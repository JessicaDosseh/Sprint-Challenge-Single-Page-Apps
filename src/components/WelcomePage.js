import React from "react";
import styled from 'styled-components';

const Welcomepage = styled.div `
  // border: 2px solid red;
  display: felx;
  justify-content: center;
 `; 

export default function WelcomePage() {
  return (
    <Welcomepage>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          // src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          src="https://www.tvovermind.com/wp-content/uploads/2017/03/RickAndMorty-640x360.jpg"
          alt="rick"
        />
      </header>
    </Welcomepage>
  );
}
