"use strict";



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

   let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
let computerSelection = getComputerChoice();
   


function getComputerChoice(min, max) {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max) + min);
}

switch (computerSelection)  {
    case 1:
    computerSelection = "rock";
    break;
    case 2:
     computerSelection = "paper";
     break;
    case 3:
        computerSelection == "scissors";
        break;
        
}

let roundResult = playRound(playerSelection, computerSelection); 
alert(`Player choice: ${playerSelection}; Computer choice: ${computerSelection}.${roundResult}`);


let playerScore = 0;
let computerScore = 0;
let tie = 0;

   

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (roundResult.includes("You win!")) {
        playerScore++;
    } else if (roundResult.includes("You lose!")) {
        computerScore++;
        } else {
            tie++;
        }
}
    switch (true) {
        case (playerScore > computerScore) && (playerScore > tie):
            alert("Congratulations! You win!");
        case (computerScore > playerScore) && (computerScore > tie):
             alert("Sorry! I win!");
            case playerScore == computerScore:
                alert("It's a tie!");
    }



game();
