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

const playerHand = document.querySelector("#playerHand");
const computerHand = document.querySelector("#computerHand");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const randomChoices = [
    {
    name: "Rock",
    image: "images/rock.png"
},

{
  name: "Paper",
  image: "images/paper.png"
},

{
    name: "Scissors",
    image: "images/scissors.png"
}
];


// Main game function
function playGame(playerChoice) {

    showResults();
    showScores();

    player.textContent = `${playerChoice}`;

    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    const computerChoice = randomChoices[randomIndex];
    
    computer.textContent = computerChoice.name;
    computerHand.src = computerChoice.image;
    

    /*  Decide winner */
    if (playerChoice === computerChoice.name) {
        result.textContent = "Draw";
        drawScore++;
        drawMatches.textContent = drawScore;
    } 
    else if (
        (playerChoice === "Rock" && computerChoice.name === "Scissors") ||
        (playerChoice === "Paper" && computerChoice.name === "Rock") ||
        (playerChoice === "Scissors" && computerChoice.name === "Paper"))
    {
        result.textContent = "You Win!";
        showConfetti();
        playerScore++;
        playerScoreText.textContent = playerScore;
    } 
    else {
        result.textContent = "You Lose";
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
}

// Show the result section
function showResults() {
    textSection.classList.remove("hidden");
    textSection.classList.add("show");
}

function showScores() {
    eachScores.classList.remove("hide");
    eachScores.classList.add("display");
}

function shakeHands() {
    playerHand.classList.remove("shake");
    computerHand.classList.remove("shake");

    void playerHand.offsetWidth;
    void computerHand.offsetWidth;

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");
}


// Button events
    rockBtn.addEventListener("click", () => {
        shakeHands();

    setTimeout(()=>{
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");

            playGame("Rock");
            playerHand.src = "images/rock.png";
        }, 850);
});

paperBtn.addEventListener("click", () => {
    shakeHands();
    setTimeout(()=>{
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");

        playGame("Paper");
        playerHand.src = "images/paper.png";
    }, 850);
    
});

scissorsBtn.addEventListener("click", () => {
    shakeHands();
    setTimeout(()=>{
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");

        playGame("Scissors");
        playerHand.src = "images/scissors.png";
    }, 850);
});



//SHOW CONFETTI
function showConfetti() {
    confetti({
        particleCount: 550,
        spread: 80,
        origin: {
            y: 0.7
        },
        colors: [
            "#00C853",
            "#4CAF50",
            "#81C784",
            "#A5D6A7"
        ]
    });
}
