
// Shows a notification for a certain period of time.
export function showNotification(setter) {
  // Set the notification state to true
  setter(true);
  
  // Set a timeout to change the notification state to false after 2000 milliseconds (2 seconds)
  setTimeout(() => {
    setter(false);
  }, 2000);
}


 // Checks if the player has won or lost the game.

export function checkWin(correct, wrong, word) {
  // Set the initial status to "win"
  let status = "win";

  // Iterate over each letter in the word
  word.split("").forEach((letter) => {
    // If the letter is not in the array of correct letters, set the status to an empty string
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // If the number of wrong letters is equal to 6, set the status to "lose"
  if (wrong.length === 6) status = "lose";

  // Return the status of the game
  return status;
}