playerSelection = prompt("Pick one: ");
let playBtn = document.querySelector("play-button");



const getComputerChoice = () => {
  let compChoice = ["rock", "paper", "scissors"];
  let nb = Math.floor(Math.random() * 3);
  return compChoice[nb];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "") {
    return "Input a valid answer";
  }
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(getComputerChoice());
    return `You win ! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "That's a tie";
  } else {
    return `You lose ! ${computerSelection} beats ${playerSelection}`;
  }
};

const computerSelection = getComputerChoice();
const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
  return 0;
};

console.log(game());

playBtn.addEventListener('click',playRound());
