import React, { useState } from "react";
import "../components/to.css";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="inputpart">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="plus" onClick={addTask}>
          +
        </button>
      </div>
      <ul>
        <div className="body">
          {tasks.map((task, index) => (
            <div className="bodyContent">
             
              <input className="inputTask" type="text" value={task}    key={index}/>
              <button onClick={() => removeTask(index)} id="complete">completed</button>
              <button onClick={() => removeTask(index)} id="remove" >remove</button>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TodoApp;
