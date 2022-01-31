import react from "react";
import React, { useState } from "react";
import Pokemon from "./Pokemon";
import Task from './Task';

const Todo = () =>{
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log(task)
      setTasks([...tasks, <Task key={tasks.length} description={task}/>])
      setTask("");
    }
  }

  return(
    <div className="row">
      <Pokemon />
      <h1 className="col-2">
        Todo List
      </h1>
      <input
        className="form-control"
        type="text"
        id="txt_new_task"
        name="txt_new_task"
        value={task}
        onChange={event => setTask(event.target.value)}
        onKeyPress={handleKeyPress} />
      <div className="row">
        {tasks.map((iTask,i) => <react.Fragment>{iTask}</react.Fragment>)}
      </div>
    </div>
  )
}

export default Todo;