
  //Variable declaration
 let rock = document.querySelector(".rock");
 let paper = document.querySelector(".paper");
 let scissors = document.querySelector(".scissors");
 let yourScore = document.querySelector(".yourScore");
 let computerScore = document.querySelector(".computerScore");
 
  //Functon declaration
const getComputerChoice = () => {
  let compChoice = ["rock", "paper", "scissors"];
  let nb = Math.floor(Math.random() * 3);
  return compChoice[nb];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection)
  {
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

//event handler

const handleClick = (playerSelection) => {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

rock.addEventListener("click", function(){
  handleClick("rock")
});

paper.addEventListener("click", function(){
  handleClick("paper")
});

scissors.addEventListener("click", function(){
  handleClick("scissors")
});


