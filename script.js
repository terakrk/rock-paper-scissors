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
if ((playerScore === 5) && (playerScore > computerScore)) {
    finalScore = "Congratulations! You win!";
} else {
    finalScore = "Sorry! I win!";
} 

console.log(finalScore);
endGame();
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    //* winning rounds *//
    if ((playerSelection === 'rock') && (computerSelection === 'scissors') || ((playerSelection === 'paper') && (computerSelection === 'rock')) || ((playerSelection === 'scissors') && (computerSelection === 'paper'))) {
        ++playerScore;
       console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
       console.log(`Player score: ${playerScore}. Computer score: ${computerScore}.`);
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper') && (computerSelection === 'scissors') || (playerSelection === 'scissors') && (computerSelection === 'rock')) {
        ++computerScore;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        console.log(`Player score: ${playerScore}. Computer score: ${computerScore}.`);
    }  else {
        console.log("It's a tie!");
    }

    if ((playerScore === 5) || (computerScore === 5)) {
        getWinner()
    } else {
    
    }

}

function endGame() {
    const weapons = document.querySelectorAll(".weapons");
    weapons.forEach((weapon) => {
        weapon.classList.add("hidden");
    const reset = document.querySelector("#reset");
    reset.classList.remove("hidden");
    reset.addEventListener('click', resetGame);
    
    });
};

function resetGame() {
    const weapons = document.querySelectorAll(".weapons");
    weapons.forEach((weapon) => {
        weapon.classList.remove("hidden");
    const reset = document.querySelector("#reset");
    reset.classList.add("hidden");
    
   
    });
 
    playerScore = 0;
    computerScore = 0;
};







