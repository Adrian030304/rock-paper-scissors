// Variable declaration
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let playerScoreSpanElement = document.querySelector(".yourScoreSpan");
let computerScoreSpanElement = document.querySelector(".computerScoreSpan");
let roundResultsMsg = document.querySelector(".winner");
let resetGameBtn = document.querySelector("#resetBtn");
let optionsContainer = document.querySelector(".options-container");

playerScoreSpanElement.innerHTML = 0;
computerScoreSpanElement.innerHTML = 0;

let playerScore = 0;
let computerScore = 0;

// Function declaration
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const hasPlayerWonTheRound = (player, computer) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
};

const getRoundResults = (userOption) => {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
};

const showResults = (userOption) => {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    roundResultsMsg.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = "";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "flex"; // or "block" depending on your CSS
};

// Event handlers
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
