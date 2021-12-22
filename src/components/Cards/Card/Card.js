import React from "react";
import "./Cards.css";

const Card = ({ taskTitle, taskInput, handleCardDelete, id }) => {
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
            {/* <input type="text" /> */}
            <button>Add a Task</button>
            <button onClick={() => handleCardDelete(id)}>Delete Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}; // we are calling the id via props to this card component and add it to the delete btn. We are calling the onClick handler and passing in an function and that function is handleCardDelete. And we are passing the id so that we are removing the card with the same id.

export default Card;
