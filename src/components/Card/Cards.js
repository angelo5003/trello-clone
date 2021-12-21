import React, { useState } from "react";

import "./Cards.css";

const newCardArray = [
  {
    // Column stuff
    id: 1,
    title: "test",
    inputField: "",
  },
];

const Cards = () => {
  const [addTask, setAddTask] = useState(newCardArray); // we're setting the array of newCardArray as the default state of addTask.

  const changeTask = (event, id) => {
    event.preventDefault();
    const updatedTasks = addTask.map((task) => {
      return {
        ...task,
        inputField: task.id === id ? event.target.value : task.inputField,
      }; // we're making a copy with the ...(spread-operator) of the addTask state(the array of newCardArray) and mapping over the spreaded array.
    }); // we're returning a copy of the object of task(the parameter we using to map over the addTask array). We are targeting the inputField and saying if the textfield is equal to the task id and the id of the inputfield we're in, if that is true than we want to set the inputField value to event.target.value. Otherwise keep it the same with would be task.inputField.

    setAddTask(updatedTasks); // updateTasks is the variable we are using to use in the setAddTask state/function.
    console.log(addTask);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // create an empty formData object. We want to use the value of this object.
    const taskTitle = formData.get("title"); // we use formData variable to use the new object, we use the .get() method with the naming of "title" which we will be using for the input field as a identifier.

    setAddTask([...addTask, { id: addTask.length + 1, inputField: taskTitle }]); // updating our setAddTask, spread(make a copy) the addTask you already have, and add a new one to the trello list. Id is going to our addTask.length and we are incrementing/add by 1. Also the inputField we are getting from our addTask state/array, is equal to the taskTitle from the addNewTask function we're we saying that it needs to the get the form Object with the name of "title".
    console.log(taskTitle);

    e.target.reset(); // resetting the target when you press on the enter button, and clearing the input field.
  };

  return (
    <>
      <button>Add new Card</button>
      <div className="card-container">
        <div className="card-content">
          <div className="card-info">
            <form onSubmit={addNewTask}>
              <input
                type="text"
                name="title"
                placeholder="Add a task press enter"
              />
            </form>

            <ul>
              {addTask.map((card) => {
                return (
                  <li key={card.id}>
                    <input
                      type="text"
                      value={card.inputField}
                      onChange={(event) => changeTask(event, card.id)}
                    />
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
