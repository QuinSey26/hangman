import React, { useState } from "react";
/* HelpButton component displays a button that, when clicked, 
shows a popup with instructions on how to play a game.*/

export default function HelpButton() {
  // State to track whether the popup is visible or not
  const [showPopup, setShowPopup] = useState(false);

  // Event handler for the button click. Sets the showPopup state to true, displaying the popup.

  const handleClick = () => {
    setShowPopup(true);
  };

  // Event handler for closing the popup. Sets the showPopup state to false, hiding the popup.

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Render the popup if showPopup state is true */}
      {showPopup && (
        <div className="popupHelp">
          <div className="popupHelpContent">
            <button className="closeButton" onClick={handleClosePopup}>
              Close
            </button>
            <p>
              Hangman is a guessing game where a player tries to guess a word by
              suggesting letters. The player has a limited number of incorrect
              guesses before they lose the game. The word to guess is
              represented by a row of dashes, representing each letter of the
              word. If the guessing player suggests a letter that is in the
              word, it is revealed in the corresponding dash(es). If the player
              suggests a letter that is not in the word, it counts as an
              incorrect guess. Every time an guess is incorrect a part of a
              figure is drawn. The game continues until the player correctly
              guesses the word or the complete figure is drawn and losses.
            </p>
          </div>
        </div>
      )}
      {/* Button to open the popup */}
      <button onClick={handleClick}>How to Play</button>
    </div>
  );
}
