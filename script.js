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
    return (playerSelection, computerSelection);
}
console.log(`Player Selection: ${playerSelection}; Computer Selection: ${computerSelection};`);

switch(true) {
    case (playerSelection == "rock" && computerSelection == "scissors"):
       console.log("Rock beats scissors! You win!");
        break;
    case (playerSelection == "paper" && computerSelection == "rock"):
    console.log("Paper beats rock! You win!");
    break;
    case (playerSelection == "scissors" && computerSelection == "paper"):
        console.log("Scissors beats paper! You win!");
        break;
    case (playerSelection == "rock" && computerSelection == "paper"):
        console.log("Paper beats rock! You lose!");
        break;
    case (playerSelection == "paper" && computerSelection == "scissors"):
        console.log("Scissors beats paper! You lose!");
        break;
        case (playerSelection == "scissors" && computerSelection == "rock"):
            console.log("Rock beats scissors! You lose!");
            break;
        case (playerSelection == computerSelection):
            console.log("It's a tie!");
            break;
}


