import React from "react";

export default function CharacterCard(props) {
  return (
    <div className='Characters'>
      <div className='CharacterCards'>
        <h2>Name:{props.name}</h2>
        {/* <img src={props.image} alt={props.name}/> */}
        <p>Species:{props.species}</p>
        <p>Gender:{props.gender}</p>
        <p>Status:{props.status}</p>
      </div>
    </div>
  );
}
