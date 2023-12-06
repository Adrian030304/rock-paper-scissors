
  //Variable declaration
 let rock = document.querySelector(".rock")
 let paper = document.querySelector(".paper")
 let scissors = document.querySelector(".scissors")

  //Functon declaration
const getComputerChoice = () => {
  let compChoice = ["rock", "paper", "scissors"];
  let nb = Math.floor(Math.random() * 3);
  return compChoice[nb];
};

const playRound = (playerSelection, computerSelection) => {
  
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "") {
    return "Input a valid answer";
  }
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
//declare game function to run a number of times

const computerSelection = getComputerChoice();

playBtn.addEventListener("click", function(){
  let playerSelection = prompt("Enter your choice: ");
  playRound(playerSelection, computerSelection) 
});


