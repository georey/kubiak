import react from "react";
import React, { useState } from "react";
import Pokemon from "./Pokemon";
import Task from './Task';

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && task !== "") {
      setTasks([...tasks, task])
      setTask("");
    }
  }

  return (
    <div className="row">
      <Pokemon />
      <h1 className="col-2 p-3">
        Todo List
      </h1>
      <div className="p-4">
        <input
          key="txt_new_task"
          className="form-control"
          type="text"
          id="txt_new_task"
          name="txt_new_task"
          value={task}
          placeholder="New Task"
          required
          onChange={event => setTask(event.target.value)}
          onKeyPress={handleKeyPress} />
      </div>
      <div className="row ms-3">
        {tasks.map((iTask, i) => <react.Fragment key={i}><Task description={iTask} /></react.Fragment>)}
      </div>
    </div>
  )
}

export default Todo;