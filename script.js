"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//click button for check
document.querySelector(".check").addEventListener("click", function () {
  //always the user input will be string value we need to convert it to Number ..
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Enter a Value ");

    //if guess is correct
  } else if (guess === secretNum) {
    displayMessage("🎊 Correct Answer");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //  if guess is high
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "📈 Too High" : "📉 Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You loose 👎");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
