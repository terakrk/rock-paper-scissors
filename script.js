"use strict";
let playerGuess = prompt("Rock, paper or scissors?");
const playerSelection = playerGuess.toLowerCase();

let computerSelection = getComputerChoice();
switch (computerSelection)  {
    case 1:
    computerSelection = "rock";
    break;
    case 2:
        computerSelection = "paper";
        break;
    case 3:
        computerSelection = "scissors";
        break;
        
}

function getComputerChoice(min, max) {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max) + min);
}

function playRound(playerSelection, computerSelection) {
   switch (true) {
    case playerSelection == "rock" && computerSelection == "scissors":
          return "Rock beats scissors! You win!";

    case playerSelection == "paper" && computerSelection == "rock":
          return "Paper beats rock! You win!";

    case playerSelection == "scissors" && computerSelection == "paper":
            return "Scissors beats paper! You win!";

    case playerSelection == "rock" && computerSelection == "paper":
          return "Paper beats rock! You lose!";

    case playerSelection == "paper" && computerSelection == "scissors":
          return "Scissors beats paper! You lose!";

    case playerSelection == "scissors" && computerSelection == "rock":
            return "Rock beats scissors! You lose!";
    default:
               return "It's a tie!";
        }
       
}

let result = playRound(playerSelection, computerSelection);

console.log(`Player Selection: ${playerSelection}; Computer Selection: ${computerSelection}. ${result}`);




