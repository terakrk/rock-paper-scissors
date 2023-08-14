'use strict';
let computerScore = 0;
let playerScore = 0;
let tie = 0;
let finalScore = "";
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


function getPlayerChoice(){
const weapons = document.querySelectorAll('.weapons');
    weapons.forEach(weapon =>{
        weapon.addEventListener('click', function() {
            playerSelection = weapon.id; playRound(playerSelection, computerSelection);
        });
    });
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
    

function getWinner() {
if ((playerScore > computerScore) && (playerScore >= tie)) {
    finalScore = "Congratulations! You win!";
} else if ((playerScore < computerScore) && (computerScore >= tie)) {
    finalScore = "Sorry! I win!";
} else {
    finalScore = "We both won!";
}
console.log(finalScore)
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    //* winning rounds *//
    if ((playerSelection === 'rock') && (computerSelection === 'scissors') || ((playerSelection === 'paper') && (computerSelection === 'rock')) || ((playerSelection === 'scissors') && (computerSelection === 'paper'))) {
        ++playerScore;
       console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper') && (computerSelection === 'scissors') || (playerSelection === 'scissors') && (computerSelection === 'rock')) {
        ++computerScore;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }  else {
        console.log("It's a tie!");
    }


}








