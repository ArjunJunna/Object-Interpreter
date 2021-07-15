import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "💌": "Love Letter",
  "💣": "Bomb",
  "🧳": "Luggage",
  "🎈": "Balloon",
  "👑": "Crown",
  "⚓": "Anchor",
  "💉": "Syringe",
  "🛡": "Shield",
  "⌚": "Watch",
  "☠": "Skull and Crossbones",
  "🖨": "Printer",
  "🛎": "Bellhop Bell",
  "🔪": "Kitchen Knife",
  "🎓": "Graduation Cap",
  "📟": "Pager",
  "🔮": "Crystal Ball",
  "🔋": "Battery",
  "🕹": "Joystick",
  "🎀": "Ribbon",
  "📻": "Radio",
  "📱": "Mobile Phone",
  "☎": "Telephone",
  "🕯": "Candle",
  "🧥": "Coat",
  "🧦": "Socks",
  "🔦": "Flashlight",
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
      <h1>OBJECT INTERPRETER</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Place your emoji here..."
      />
      <h2>Object Name - {meaning}</h2>
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
