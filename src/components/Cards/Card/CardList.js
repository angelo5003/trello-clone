import React from "react";
import Card from "./Card";

const CardList = ({
  newCard,
  handleAddNewCard,
  handleCardDelete,
  handleAddTask,
}) => {
  return (
    <>
      <button onClick={handleAddNewCard}>Add New Card</button>
      <div>
        {newCard.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              taskTitle={card.taskTitle}
              taskInput={card.taskInput}
              handleCardDelete={handleCardDelete}
              handleAddTask={handleAddTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
