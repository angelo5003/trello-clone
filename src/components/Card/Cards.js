import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [title, setTitle] = useState("");

  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-info">
          <h3>{title}</h3>
          <input
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <p>Add a card</p>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <input
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <p>Add a card</p>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <input
            className="card-title"
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Enter Title"
          />
          <p>Some text</p>
          <p>Some text</p>
          <p>Add a card</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
