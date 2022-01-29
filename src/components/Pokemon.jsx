import React from "react";

const Pokemon = ({name, image}) =>{
    return(
      <figure className="col-1">
        <img className="rounded float-right" src={image} alt={name} height="80px" title={name} />
      </figure>
    )
  }
  export default Pokemon