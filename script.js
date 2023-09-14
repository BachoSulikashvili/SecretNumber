let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ Only number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 You Win!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.background =
      "linear-gradient(green, #0f9b0f";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? "📈 Secret Number is Higher!"
          : "📉 Secret Number is Lower!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background =
        "linear-gradient(#f00000, #dc281e";
      document.querySelector(".title").textContent = "You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.background =
    "linear-gradient(#0f0c29, #302b63, #24243e)";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".title").textContent = "Guess Number!";
});
