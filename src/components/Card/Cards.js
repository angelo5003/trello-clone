import React, { useState } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const [{ card }, setCard] = useState({ card: [] }); // card state is the variable. We tell React that the state/ variable of card should be an empty array
  const addCard = () => {
    // Made a function to add a new card.
    card.push(<Card />); // when the function is being called the card state and empty array should push the Card component.
    setCard({ card: [...card] }); // when the btn is clicked, the function of setCard should make an copy of the original array of card and add the card to the array.

    console.log(card);
  };

  return (
    <div>
      <button onClick={addCard}>Add Card</button>
      {card}
    </div>
  );
};

export default Cards;
