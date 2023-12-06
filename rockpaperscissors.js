
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
  
  if (playerSelection === computerSelection)
  {
    console.log(getComputerChoice());
    return "That's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )  { 
      return `You win ! ${playerSelection} beats ${computerSelection}`;
  } else {
      return `You lose ! ${computerSelection} beats ${playerSelection}`;
  }
};
//

const computerSelection = getComputerChoice();

playBtn.addEventListener("click", function(){
  let playerSelection 
  playRound(playerSelection, computerSelection) 
});


