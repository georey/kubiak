import React, { useState } from "react";
import Pokemon from "./Pokemon";

export default function Todo(){
  const [task, setTask] = useState([]);
  

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  return(
    <div className="row">
      <Pokemon />
      <h1 className="col-2">
        Todo List
      </h1>      
      
    </div>
  )
}