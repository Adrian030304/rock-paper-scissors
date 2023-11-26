const getComputerChoice = () => {
let compChoice = ["rock","paper","scissors"];
let nb = Math.floor(Math.random() * 3);
return compChoice[nb];
};

console.log(getComputerChoice())

const getPlayerChoice = (input) =>{
    input = input.toLowerCase();
    return input;
}

