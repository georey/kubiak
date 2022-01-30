import React, {useState, useEffect} from "react";
import pokeball from "../assets/images/pokeball.png"

export default function Pokemon (){
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
    return(
      <React.Fragment>
        {pokemon.id ===0 ? (
          <figure className="col-1">
          <img className="rounded float-right" src={pokeball} height="80px" title="Loading pokemon" />
        </figure>
        ):(
          <figure className="col-1">
            <img className="rounded float-right" src={pokemon.image} alt={pokemon.name} height="80px" title={pokemon.name} />
          </figure>
        )}
      </React.Fragment>
    )
  }
  