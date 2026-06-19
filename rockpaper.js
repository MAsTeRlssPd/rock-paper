document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result");

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    if (a == 0) return "rock";
    else if (a == 1) return "scissors";
    else return "paper";
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.textContent = "Game Tied";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        result.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        result.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }

    rounds++;

    if (rounds == 5) {
        if (humanScore > computerScore) result.textContent = "You win! " + humanScore + " out of 5";
        else if (humanScore < computerScore) result.textContent = "You lose! " + humanScore + " out of 5";
        else result.textContent = "Game tied! Both won " + humanScore + " out of 5";
    }
}

function handleclick(e) {
    if (rounds >= 5) return;
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function reset(e) {
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
}

document.getElementById("rock").addEventListener("click", handleclick);
document.getElementById("paper").addEventListener("click", handleclick);
document.getElementById("scissors").addEventListener("click", handleclick);
document.getElementById("restart").addEventListener("click", reset);

 // ... rest of your code
});