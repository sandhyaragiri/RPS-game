const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const textSection = document.querySelector(".text");

const eachScores = document.querySelector(".score");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const drawMatches = document.querySelector("#drawScore");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const randomChoices = ["Rock✊🏻", "Paper🤚🏻", "Scissors✌🏻"];

// Show the result section
function showResults() {
    textSection.classList.remove("hidden");
    textSection.classList.add("show");
}

function showScores() {
    eachScores.classList.remove("hide");
    eachScores.classList.add("display");
}


// Main game function
function playGame(playerChoice) {

    showResults();
    showScores();

    player.textContent = `Player: ${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;

    // Decide winner
    if (playerChoice === computerChoice) {
        result.textContent = "Result: DRAW 🤝";
        drawScore++;
        drawMatches.textContent = drawScore;
    } 
    else if (
        (playerChoice === "Rock✊🏻" && computerChoice === "Scissors✌🏻") ||
        (playerChoice === "Paper🤚🏻" && computerChoice === "Rock✊🏻") ||
        (playerChoice === "Scissors✌🏻" && computerChoice === "Paper🤚🏻")
    ) {
        result.textContent = "Result: You Win! 🎉";
        showConfetti();
        playerScore++;
        playerScoreText.textContent = playerScore;
    } 
    else {
        result.textContent = "Result: Computer Wins! 😢";
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
}

// Button events
rockBtn.addEventListener("click", () => {
    playGame("Rock✊🏻");
});

paperBtn.addEventListener("click", () => {
    playGame("Paper🤚🏻");
});

scissorsBtn.addEventListener("click", () => {
    playGame("Scissors✌🏻");
});

//SHOW CONFETTI
function showConfetti() {
    confetti({
        particleCount: 250,
        spread: 80,
        origin: {
            y: 0.7
        }
    });
}