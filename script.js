"use strict"
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice(min, max) {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max) + min);
}



function playRound(playerSelection, computerSelection) {
    return { playerSelection, computerSelection };
    

}

console.log(playerSelection);
console.log(computerSelection);
