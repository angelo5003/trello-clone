import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [title, setTitle] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

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
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          {Array.from(Array(counter)).map((number, index) => {
            return <input key={number} type="text" />;
          })}
          <button onClick={handleCount}>Add a card</button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          {isEditing ? null : (
            <h3 onChange={() => setEditing(!isEditing)}>{title}</h3>
          )}
          <input
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <button>Add a card</button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          {isEditing ? null : (
            <h3 onChange={() => setEditing(!isEditing)}>{title}</h3>
          )}
          <input
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <button>Add a card</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
