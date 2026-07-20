const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const textSection = document.querySelector(".text");

const randomChoices = ["Rock✊🏻", "Paper🤚🏻", "Scissors✌🏻"];

// Show the result section
function showResults() {
    textSection.classList.remove("hidden");
    textSection.classList.add("show");
}

// Main game function
function playGame(playerChoice) {

    showResults();

    player.textContent = `Player: ${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;

    // Decide winner
    if (playerChoice === computerChoice) {
        result.textContent = "Result: DRAW 🤝";
    } 
    else if (
        (playerChoice === "Rock✊🏻" && computerChoice === "Scissors✌🏻") ||
        (playerChoice === "Paper🤚🏻" && computerChoice === "Rock✊🏻") ||
        (playerChoice === "Scissors✌🏻" && computerChoice === "Paper🤚🏻")
    ) {
        result.textContent = "Result: You Win! 🎉";
    } 
    else {
        result.textContent = "Result: Computer Wins! 😢";
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