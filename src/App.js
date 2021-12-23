import React, { useState } from "react";

import CardList from "./components/Cards/Card/CardList";
import Header from "./components/Header/Header";

const cardDetails = [
  {
    id: Date.now().toString(),
    taskTitle: "This is the Title",
    taskInput: "This is the Task",
  },
];

function App() {
  const [addCard, setAddCard] = useState(cardDetails); //default state of addCard is set to the array of cardDetails
  const [tasks, setTasks] = useState(addCard);

  const handleAddTask = (name) => {
    const newTask = {
      id: Date.now().toString(),
      name: name,
    };
    setTasks([...tasks, newTask]);
  };

  const handleAddNewCard = () => {
    const newCard = {
      id: Date.now().toString(), // create a random id that returns the number of milliseconds elapsed since January 1, 1970 and convert it to a string to get a long line of numbers/ text as an id.
      taskTitle: "",
      taskInput: "",
    }; // create a variable with objects inside of a function which need to be added to the card when you click on the add card btn.

    setAddCard([...addCard, newCard]); // update the state with making a copy of the default state and add the newCard variable to it when a new card is made.
  }; // function to add a whole new card to the trello clone

  const handleCardDelete = (id) => {
    setAddCard(addCard.filter((card) => card.id !== id));
  }; // use the id of the selected card that we want to be deleted. We want to get all of the cards that don't have that id. Essentially we are saying give me every single card that is not the card with the id we are passing as an parameter and set that to our current cards. This is going to remove it for us.

  return (
    <div>
      <Header />
      <CardList
        newCard={addCard}
        handleAddNewCard={handleAddNewCard}
        handleCardDelete={handleCardDelete}
        handleAddTask={handleAddTask}
      />
    </div>
  );
}

export default App;
