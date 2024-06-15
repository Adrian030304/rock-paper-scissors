//Variable declaration
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");
let winner = document.querySelector(".winner")
yourScore.innerHTML = 0
computerScore.innerHTML = 0
 
 
 //Functon declaration
const getComputerChoice = () => {
 let options = ["rock", "paper", "scissors"];
 let randomIndex = Math.floor(Math.random() * 3);
 return options[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
 
 if(parseInt(yourScore.innerHTML) === 5 ){
   winner.innerHTML = `You won !`
 } else if(parseInt(computerScore.innerHTML) === 5){
   winner.innerHTML = `You Lost ! Computer has won !`
   
 }

 if (playerSelection === computerSelection)
 { 
   return "That's a tie";
 } else if (
   (playerSelection === "rock" && computerSelection === "scissors") ||
   (playerSelection === "paper" && computerSelection === "rock") ||
   (playerSelection === "scissors" && computerSelection === "paper")
 )  { 
     parseInt(yourScore.innerHTML ++);
     return `You win ! ${playerSelection} beats ${computerSelection}`;

 } else {
     parseInt(computerScore.innerHTML ++);
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

