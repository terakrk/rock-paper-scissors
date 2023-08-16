'use strict';
let computerScore = 0;
let playerScore = 0;
let tie = 0;
let finalScore = "";
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
const result = document.querySelector('.result');
const pScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const tieScore = document.querySelector('.tie-score');
const fScore = document.querySelector('.final-score');


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

fScore.textContent = finalScore;
endGame();
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    //* winning rounds *//
    if ((playerSelection === 'rock') && (computerSelection === 'scissors') || ((playerSelection === 'paper') && (computerSelection === 'rock')) || ((playerSelection === 'scissors') && (computerSelection === 'paper'))) {
        ++playerScore;

       result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
       
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper') && (computerSelection === 'scissors') || (playerSelection === 'scissors') && (computerSelection === 'rock')) {
        ++computerScore;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }  else {
        ++tie;
        result.textContent = "It's a tie!";
    }

    if ((playerScore === 5) || (computerScore === 5)) {
        getWinner()
    } else {
    
    }

    pScore.textContent = `Player score: ${playerScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
    tieScore.textContent = `Tie score: ${tie}`;

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
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    finalScore = '';
  
    pScore.textContent = `Player score: ${playerScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
    tieScore.textContent = `Tie score: ${tie}.`;
    fScore.textContent = finalScore;
    result.textContent = '';
    const weapons = document.querySelectorAll(".weapons");
    weapons.forEach((weapon) => {
        weapon.classList.remove("hidden");
    const reset = document.querySelector("#reset");
    reset.classList.add("hidden");
    });
};







