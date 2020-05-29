import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "../Card";
import PlayerHand from "../PlayerHand";
const cards = require("../../data.json");

function App() {
  const [question, setQuestion] = useState([]);
  const [hand, setHand] = useState([]);

  useEffect(() => {
    const blackCards = cards.blackCards.map((card) => (
      <Card text={card.text} cardColour={`black`} />
    ));
    const whiteCards = cards.whiteCards.map((card) => (
      <Card text={card} cardColour={`white`} />
    ));
    setQuestion(blackCards);
    setHand(whiteCards);
    console.log(whiteCards);
  }, []);
  return (
    <div className="App">
      {question[0]}
      <PlayerHand sevenCards={hand.slice(0, 7)} />
    </div>
  );
}

/* PLAN

button to draw 7 white cards
on click fetches 7  white cards and displays them as a hand - can be randomised later

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
