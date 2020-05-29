import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "../Card";
const cards = require("../../data.json");

function App() {
  const [question, setQuestion] = useState("");
  console.log(`the`, cards);

  useEffect(() => {
    const blackCards = cards.blackCards.map((card) => (
      <Card text={card.text} cardColour={`black`} />
    ));
    setQuestion(blackCards);
    console.log(blackCards);
  }, []);
  return <div className="App">{question[0]}</div>;
}

/* PLAN

MVP = make a component for each hand -> later on will have multiple hands and not see other players cards. 

component = hand which displays 7 white cards
component2 = current black card 
component3 = cards in play (what everyone has selected)
component4 = card 
component5 = draw pile/discard pile (visual component, static)
win condition = first player to 5 
component6 = score board.

- get 7 random white cards for the player
- get 1 random black card

list/array for holding cards
sort randomly the entire deck, store in an array, pop off the top each time you want a card, remove the top card

global variables = scores for each player, shuffled black cards, shuffled white cards.  

*/

export default App;
