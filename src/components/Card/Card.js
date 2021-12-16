import React, { useState } from "react";
import "./Cards.css";

const taskData = [
  {
    id: 1,
    cardTitle: "",
    taskInput: "",
  },
];

const Card = () => {
  const [{ newInput }, setNewInput] = useState({ newInput: [] });
  const [addTask, setAddTask] = useState(taskData);

  const addNewInput = () => {
    newInput.push(<input type="text" placeholder="Enter Task" />);
    setNewInput({ newInput: [...newInput] });
    console.log(newInput);
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-info">
          <h3></h3>
          <input type="text" placeholder="Enter Title" />
          {newInput}
          <button onClick={addNewInput}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
