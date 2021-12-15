import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [title, setTitle] = useState("");
  const [isEditing, setEditing] = useState(false);

  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-info">
          {isEditing ? null : (
            <h3 onChange={() => setEditing(!isEditing)}>{title}</h3>
          )}

          <input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />

          <button>Add Task</button>
        </div>
      </div>

      {/* <div className="card-content">
        <div className="card-info">
          {isEditing ? null : (
            <h3 onChange={() => setEditing(!isEditing)}>{title}</h3>
          )}
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <button>Add Task</button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          {isEditing ? null : (
            <h3 onChange={() => setEditing(!isEditing)}>{title}</h3>
          )}
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <button>Add Task</button>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
