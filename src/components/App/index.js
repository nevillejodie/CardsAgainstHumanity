import React, { useState } from "react";
import "./App.css";
import Card from "../Card"
const cards2 = require("../../data.json");


function App() {
  const [cards, setCards] = useState("");

 console.log(cards2)
  return (
    <div className="App">
      <p>{cards2.blankCards}</p>
      
<Card text={"Murray's mom has got it going on"} cardColour={`black`}/>
    </div>
  );
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
