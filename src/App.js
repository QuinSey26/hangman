/*Create a React app that allows user to play Hangman.
Should include styled components and components that is rendered using array.Map() method.
State of components should be sync
User should be able to restart the game
User should by notified if they won or lost the game
Ui should be attractive
User should be able to request help for the game
Include a readme file with the rules and how to run the app on their local machine
Game should be pushed to Github */

import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";
import { showNotification as show } from "./helpers/helpers";
import HelpButton from "./components/HelpButton";

// Array of words for the game
const words = [
  "application",
  "programming",
  "interface",
  "execute",
  "module",
  "components",
  "stylesheet",
  "function",
  "debug",
  "terminal",
  "output",
  "index",
  "react",
  "state",
];

// Select a random word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// The main App component that renders the Hangman game.

function App() {
  // State variables
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  /* Event listener for keydown event.
   Handles the logic for checking if the pressed key is a valid letter and updates the game state accordingly.*/
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Resets the game state and selects a new random word.
  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // Render the Hangman game components
  return (
    <>
      <Header />
      <div className="gameContainer">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <HelpButton />
    </>
  );
}

export default App;

/* Did struggled with some parts of the the project, had help from - Build Hangman with React Youtube - https://www.youtube.com/watch?v=jj0W8tYX_q8 */

