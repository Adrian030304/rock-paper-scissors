//Variable declaration
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
//Functon declaration
const getRandomComputerResult = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const hasPlayerWonTheRound = (player, computer) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
};
//
const getRoundResults = (userOption) => {
  const computerResult = getRandomComputerResult();


};

//event handler

const handleClick = (playerSelection) => {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
};

rock.addEventListener("click", function () {
  handleClick("rock");
});

paper.addEventListener("click", function () {
  handleClick("paper");
});

scissors.addEventListener("click", function () {
  handleClick("scissors");
});
