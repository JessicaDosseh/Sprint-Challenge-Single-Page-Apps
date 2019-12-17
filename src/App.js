import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'; 
import WelcomePage from './components/WelcomePage'; 
import SearchForm from './components/SearchForm';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';  

const Navbar = styled.div `
  // border: 2px solid red;
  padding: 20px;
  background: darkcyan;
  color: white;
  display: felx;
  justify-content: center;
 `; 

export default function App() {
  return (
    <main>
      <Navbar>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/characters'>Characters</Link>
        <Link className='navLink' to='/search'>Search</Link>
      </Navbar>

      <Header />
      
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
      <Route path='/search' component={SearchForm}/>

    </main>
  );
}
