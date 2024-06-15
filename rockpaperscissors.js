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
const getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const resetGame = () =>{
  yourScoreSpan.innerHTML = 0;
  computerScoreSpan.innerHTML = 0;
  winner.innerHTML = ""
}
const playRound = (playerSelection, computerSelection) => {
  if (parseInt(yourScoreSpan.innerHTML) === 5) {
    winner.innerHTML = `You won !`;
    
  } else if (parseInt(computerScoreSpan.innerHTML) === 5) {
    winner.innerHTML = `You Lost ! Computer has won !`;
    
  }

  if (playerSelection === computerSelection) {
    winner.innerHTML =  "That's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    parseInt(yourScoreSpan.innerHTML++);
    return `You win ! ${playerSelection} beats ${computerSelection}`;
  } else {
    parseInt(computerScoreSpan.innerHTML++);
    return `You lose ! ${computerSelection} beats ${playerSelection}`;
    
  }
  winner.innerHTML = ""
};
//


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
