import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "💌": "Love Letter",
  "💣": "Bomb",
  "🧳": "Luggage",
  "🎈": "Balloon",
  "💎": "Gem Stone"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We do not have this in our database...";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Object Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>Meaning ~ {meaning}</h2>
      <h3>Emoji's we know...</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
