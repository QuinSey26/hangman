import React from "react";
//A component that displays the hangman figure based on the number of wrong letters.

import hangman10 from "./images/hangman10.png";
import hangman9 from "./images/hangman9.png";
import hangman11 from "./images/hangman11.png";
import hangman8 from "./images/hangman8.png";
import hangman5 from "./images/hangman5.png";
import hangman6 from "./images/hangman6.png";
import hangman7 from "./images/hangman7.png";

export default function Figure({ wrongLetters }) {
  // Calculate the number of errors
  const errors = wrongLetters.length;

  return (
    <div className="figureContainer">
      {/* Display the hangman figure based on the number of errors */}
      {errors >= 0 && errors < 1 && <img src={hangman5} alt="hangman5" />}
      {/* Head */}
      {errors > 0 && errors <= 1 && <img src={hangman6} alt="hangman6" />}
      {/* Body */}
      {errors > 1 && errors <= 2 && <img src={hangman7} alt="hangman7" />}
      {/* Arms */}
      {errors > 2 && errors <= 3 && <img src={hangman8} alt="hangman8" />}
      {errors > 3 && errors <= 4 && <img src={hangman9} alt="hangman9" />}
      {/* Legs */}
      {errors > 4 && errors <= 5 && <img src={hangman10} alt="hangman10" />}
      {errors > 5 && errors <= 6 && <img src={hangman11} alt="hangman11" />}
    </div>
  );
}
