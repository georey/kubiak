import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

export default function Todo(){
  const [task, setTask] = useState([]);
  const [pokemon, setPokemon] = useState({id:0});

  useEffect(()=>{
    let random = Math.floor(Math.random() * 150) + 1
    let url = "https://pokeapi.co/api/v2/pokemon/" + random;
    fetch(url)
    .then((res)=>res.json())
    .then((json) => {
      let pokemonResult = {
        id: json.id,
        name: json.name,
        image: json.sprites.front_default
      }
      setPokemon(pokemonResult)
    })
  },[])

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  return(
    <div className="row">
      {pokemon.id ===0 ? (
        <h4>Loading pokemon</h4>
      ):(
        <Pokemon key={pokemon.id} name={pokemon.name} image={pokemon.image}/>
      )}
      <h1 className="col-2">
        Todo List
      </h1>      
      
    </div>
  )
}