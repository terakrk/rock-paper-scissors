"use strict";
let computerScore = 0;
let playerScore = 0;
let tie = 0;
let outcome = "";
let finalScore = "";

game();

function getPlayerChoice() {
    let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    return playerSelection;
}

function getComputerChoice() {
    let choices = Math.floor(Math.random()*3 +1);
    switch(choices) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
        return 'scissors';
            
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection} ${outcome}`);
}
if ((playerScore > computerScore) && (playerScore >= tie)) {
    finalScore = "Congratulations! You win!";
} else if ((playerScore < computerScore) && (computerScore >= tie)) {
    finalScore = "Sorry! I win!";
} else {
    finalScore = "We both won!";
}
    alert(finalScore);
}

function playRound(playerSelection, computerSelection) {
    //* winning rounds *//
    if ((playerSelection == 'rock') && (computerSelection == 'scissors') || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        playerScore++;
       return (`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper') && (computerSelection == 'scissors') || (playerSelection == 'scissors') && (computerSelection == 'rock')) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }  else {
        tie++;
        return "It's a tie!";
    }
}





