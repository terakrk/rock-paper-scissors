"use strict";

const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

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



let result = playRound(playerSelection, computerSelection);

alert(`Player Selection: ${playerSelection}; Computer Selection: ${computerSelection}. ${result}`);

function winner() {
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    if (result.includes("You win!")) {
        playerWin++;
    } else if (result.includes("You lose!")) {
        computerWin++;
        } else {
            tie++;
        }

        switch (true) {
            case (playerWin > computerWin) && (playerWin > tie):
                return "Congratulations! You win!";
            case (computerWin > playerWin) && (computerWin > tie):
                return "Sorry! I win!";
                case playerWin == computerWin:
                    return "It's a tie!";
        }
    }


console.log(winner());






