const getComputerChoice = () => {
  let compChoice = ["rock", "paper", "scissors"];
  let nb = Math.floor(Math.random() * 3);
  return compChoice[nb];
};

const playRound = (playerSelection, computerSelection) => {
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
console.log(playRound("Rock", computerSelection));

const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound("Rock", computerSelection));
    
  }
};

console.log(game())