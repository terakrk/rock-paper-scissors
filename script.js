"use strict";

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
        let playerScore = 0;
        let computerScore = 0;
        let tie = 0;
        playRound();
        if (outcome.includes("You win!")) {
            playerScore++;
        } else if (outcome.includes("You lose!")) {
            computerScore++;
        } else {
            tie++;
    } 

console.log(`Player: ${playerSelection}; Computer: ${computerSelection}. ${outcome} `);
    }

    switch(true) {
        case (playerScore > computerScore) && (playerScore > tie):
            return "Congratulations! You win!";
        case (playerScore < computerScore) && (computerScore > tie):
            return "Sorry! You lose!";
        case (tie < playerScore) && (tie < computerScore):
            return "It's a tie!";
    }
}   


function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
       return "You win! Rock beats scissors!";
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        return "You win! Paper beats rock!";
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
       return "You win! Scissors beats paper!";
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')) {
        return "You lose! Paper beats rock!";
    } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
       return "You lose! Scissors beats paper!";
    } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        return "You lose! Rock beats scissors!";
    }  else {
        return "It's a tie!";
    }
   }

    
    
   
game();