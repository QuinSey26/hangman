import { useEffect } from "react";
import React from "react";
import { checkWin } from "../helpers/helpers";

// Popup component displays the final message and reveal word after the game ends.

/*The props object containing the following properties:
 *   - correctLetters: An array of correctly guessed letters.
 *   - wrongLetters: An array of incorrectly guessed letters.
 *   - selectedWord: The word that was selected for the game.
 *   - setPlayable: A function to update the playability of the game.
 *   - playAgain: A function to start a new game. */
export default function Popup(props) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  // Check if the game is won or lost
  if (
    checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) ===
    "win"
  ) {
    finalMessage = "Congrats! You Won";
    playable = false;
  } else if (
    checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) ===
    "lose"
  ) {
    finalMessage = "You lost!";
    finalMessageRevealWord = `... the word was ${props.selectedWord}`;
    playable = false;
  }

  // Update the playability of the game using the setPlayable function
  useEffect(() => props.setPlayable(playable));

  return (
    <div
      className="popupContainer"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={props.playAgain}>Play Again</button>
      </div>
    </div>
  );
}
