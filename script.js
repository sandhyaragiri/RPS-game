const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const randomChoices = ["Rock✊🏻", "Paper🤚🏻", "Scissors✌🏻"];

// Rock Button
rockBtn.addEventListener("click", () => {
    const playerChoice = "Rock✊🏻";
    player.textContent = `Player: ${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.textContent = "Result: DRAW 🤝";
    }
    else if (computerChoice === "Scissors✌🏻") {
        result.textContent = "Result: You Win! 🎉";
    }
    else {
        result.textContent = "Result: Computer Wins! 😢";
    }
});

// Paper Button
paperBtn.addEventListener("click", () => {
    const playerChoice = "Paper🤚🏻";
    player.textContent = `Player: ${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.textContent = "Result: DRAW 🤝";
    }
    else if (computerChoice === "Rock✊🏻") {
        result.textContent = "Result: You Win! 🎉";
    }
    else {
        result.textContent = "Result: Computer Wins! 😢";
    }
});

// Scissors Button
scissorsBtn.addEventListener("click", () => {
    const playerChoice = "Scissors✌🏻";
    player.textContent = `Player: ${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.textContent = "Result: DRAW 🤝";
    }
    else if (computerChoice === "Paper🤚🏻") {
        result.textContent = "Result: You Win! 🎉";
    }
    else {
        result.textContent = "Result: Computer Wins! 😢";
    }
});