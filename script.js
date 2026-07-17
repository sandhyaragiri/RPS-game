const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const randomShoots = ["Rock✊🏻","Paper🤚🏻","Scissors✌🏻"];

rockBtn.addEventListener("click", ()=>{
    player.textContent = "Rock✊🏻";
    computer.textContent = "null";
    result.textContent = "null";
});

paperBtn.addEventListener("click", ()=>{
    player.textContent = "Paper🤚🏻";
    computer.textContent = "null";
    result.textContent = "null";
});

scissorsBtn.addEventListener("click", ()=>{
    player.textContent = "Scissors✌🏻";
    computer.textContent = "null";
    result.textContent = "null";
});





