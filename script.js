const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const randomChoices = ["Rock✊🏻","Paper🤚🏻","Scissors✌🏻"];

rockBtn.addEventListener("click", ()=>{
    player.textContent = `Player: Rock✊🏻`;
    
    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;
});

paperBtn.addEventListener("click", ()=>{
    player.textContent = `Player: Paper🤚🏻`;
    
    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;
});

scissorsBtn.addEventListener("click", ()=>{
    player.textContent = `Player: Scissors✌🏻`;
   
    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];

    computer.textContent = `Computer: ${computerChoice}`;
});





