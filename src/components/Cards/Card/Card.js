import React, { useState } from "react";
import "./Cards.css";

const Card = ({
  taskTitle,
  taskInput,
  handleCardDelete,
  id,
  handleAddTask,
}) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddTask(name);
    setName("");
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-info">
          <div className="dynamic-card">
            <label htmlFor="taskTitle">{taskTitle}</label>
            <input
              type="text"
              name="taskTitle"
              id="taskTitle"
              placeholder="Add a title"
            />
            <form onSubmit={handleSubmit}>
              <label htmlFor="taskInput">{name}</label>
              <input
                type="text"
                name="text"
                id="taskInput"
                value={name}
                onChange={handleChange}
                placeholder="Add a Task"
              />
              <button type="submit">Add a Task</button>
            </form>
            <button onClick={() => handleCardDelete(id)}>Delete Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}; // we are calling the id via props to this card component and add it to the delete btn. We are calling the onClick handler and passing in an function and that function is handleCardDelete. And we are passing the id so that we are removing the card with the same id.

export default Card;
