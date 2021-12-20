import React, { useState } from "react";

import "./Cards.css";

const newCardArray = [
  {
    // Column stuff
    id: 1,
    title: "test",
    inputField: "This is a test h3",
  },
];

const Cards = () => {
  const [addTask, setAddTask] = useState(newCardArray);

  const changeTask = (event) => {
    event.preventDefault();
    const updateTasks = [...addTask].map((task) => {
      return { ...task, inputField: event.target.value };
    });
    setAddTask(updateTasks);
    console.log(addTask);
  };

  return (
    <>
      <button>Add new Card</button>
      <div className="card-container">
        <div className="card-content">
          <div className="card-info">
            <ul>
              {addTask.map((card) => {
                return (
                  <li key={card.id}>
                    <input
                      type="text"
                      value={card.inputField}
                      onChange={changeTask}
                    />
                    <button>Add a Task</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
