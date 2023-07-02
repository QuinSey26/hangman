import React from "react";
// Component that displays the wrong letters guessed by the user.

export default function WrongLetters({ wrongLetters }) {
  return (
    <div className="wrongLettersContainer">
      <div className="wrongLetters">
        {/* Display "Wrong Letters" heading if there are wrong letters */}
        {wrongLetters.length > 0 && <p>Wrong Letters</p>}

        {/* Map through the wrong letters array and display each letter */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            // Add commas between letters
            (prev, curr) => (prev == null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
}
