import React, { useState, useEffect } from "react";
import "./App.css";
const cards2 = require("../../data.json");

function App() {
  const [cards, setCards] = useState("");

  useEffect(() => {
    async function getCards() {
      try {
        const res = await fetch("");
        const data = await res.json();

        setCards(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCards();
  }, []);
  const cards3 = JSON.parse(cards2);
  return (
    <div className="App">
      <p>{cards3}</p>
    </div>
  );
}

export default App;
