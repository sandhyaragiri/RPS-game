const buttons = document.querySelector(".buttons");
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
const roundText = document.querySelector("#roundText"); 
const resetbutton = document.querySelector(".resetBtn"); // Your wrapper div
const innerResetBtn = document.querySelector("#reset");  // The actual button element

//ADDING SOUND EFFECTS TO BUTTONS
const clickSound = new Audio("soundEffects/click.mp3");
const winSound = new Audio("soundEffects/win.mp3");

let playerScore = 0; 
let computerScore = 0; 
let drawScore = 0; 
let roundsPlayed = 0; 
const totalRounds = 5; // Must remain const

const randomChoices = [ 
  { name: "Rock", image: "images/rock.png" }, 
  { name: "Paper", image: "images/paper.png" }, 
  { name: "Scissors", image: "images/scissors.png" } 
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

  /* Decide winner */ 
  if (playerChoice === computerChoice.name) { 
    result.textContent = "Draw"; 
    drawScore++; 
    drawMatches.innerHTML = `<span>Draw/</span>${drawScore}`;

  } else if ( 
    (playerChoice === "Rock" && computerChoice.name === "Scissors") || 
    (playerChoice === "Paper" && computerChoice.name === "Rock") || 
    (playerChoice === "Scissors" && computerChoice.name === "Paper")
  ) { 
    result.textContent = "You Got Point!"; 
    playerScore++; 
    playerScoreText.innerHTML = `<span>You/</span>${playerScore}`;

  } else { 
    result.textContent = "You Lose"; 
    computerScore++; 
    computerScoreText.innerHTML = `<span>Comp/</span>${computerScore}`; 
  } 

  // THIS IS FOR ROUNDS COUNTING 
  roundsPlayed++; 
  
  if (roundsPlayed < totalRounds) { 
    setTimeout(()=>{
     roundText.textContent = `Round ${roundsPlayed + 1}`; 
    }, 2100); 
  } 


  if (roundsPlayed === totalRounds) { 
    rockBtn.disabled = true; 
    paperBtn.disabled = true; 
    scissorsBtn.disabled = true; 
    roundText.textContent = "Game Over!"; 

    // Show the reset button wrapper layout when round 5 finishes
    innerResetBtn.style.display = "flex"; 

    if (playerScore > computerScore) { 
      result.textContent = "You won the game!"; 
      showConfetti(); 
      winSound.play();
    } 
    else if (computerScore > playerScore) { 
      result.textContent = "Computer won the game"; 
    } 
    else { 
      result.textContent = "🤝 It's a tie!"; 
    } 
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

// AFTER EACH ROUND SETTING GESTURES NORMAL 
function resetHands() { 
  playerHand.src = "images/rock.png"; 
  computerHand.src = "images/rock.png"; 
  player.textContent = ""; 
  computer.textContent = ""; 
  result.textContent = ""; 
} 

//BUTTONS FOR PAUDING FUNCTIONS HERE
function disableButtons(){
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function enableButtons(){
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

// Button events 
rockBtn.addEventListener("click", () => { 
  shakeHands(); 
  clickSound.play(); 
  disableButtons();

  setTimeout(() => { 
    playerHand.classList.remove("shake"); 
    computerHand.classList.remove("shake"); 
    playGame("Rock"); 
    playerHand.src = "images/rock.png"; 

    setTimeout(()=>{
      resetHands();

      if(roundsPlayed < totalRounds){
        enableButtons();
      }
    }, 1500);

  }, 850);

   
}); 


paperBtn.addEventListener("click", () => { 
  shakeHands(); 
  clickSound.play();
  disableButtons();

  setTimeout(() => { 
    playerHand.classList.remove("shake"); 
    computerHand.classList.remove("shake"); 
    playGame("Paper"); 
    playerHand.src = "images/paper.png";

   setTimeout(()=>{
      resetHands();

      if(roundsPlayed < totalRounds){
        enableButtons();
      }
    }, 1500);

  }, 850); 

}); 

scissorsBtn.addEventListener("click", () => { 
  shakeHands();
  clickSound.play();
  disableButtons();

  setTimeout(() => { 
    playerHand.classList.remove("shake"); 
    computerHand.classList.remove("shake"); 
    playGame("Scissors"); 
    playerHand.src = "images/scissors.png"; 

   setTimeout(()=>{
      resetHands();

      if(roundsPlayed < totalRounds){
        enableButtons();
      }
    }, 1500);

  }, 850);

}); 



// THE WORKING RESET FUNCTION
function resetGame() {
  // 1. Reset numbers
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  roundsPlayed = 0;

  // 2. Unlock gameplay buttons
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  // 3. Clear game summary texts
  roundText.textContent = "Next Round 1";
  result.textContent = "";
  player.textContent = "";
  computer.textContent = "";

  // 4. Update the visual scores back to 0 preserving your <span> tags
  playerScoreText.innerHTML = "<span>You/</span>0";
  drawMatches.innerHTML = "<span>Draw/</span>0";
  computerScoreText.innerHTML = "<span>Comp/</span>0";

  // 5. Put initial hand imagery back
  playerHand.src = "images/rock.png";
  computerHand.src = "images/rock.png";
}

// Attach the click event properly
innerResetBtn.addEventListener("click", resetGame);

// SHOW CONFETTI 
function showConfetti() { 
  confetti({ 
    particleCount: 550, 
    spread: 80, 
    origin: { y: 0.7 }, 
    colors: [ "#00C853", "#fc0681", "#f3ef03", "#0b1bfa" ] 
  }); 
}
