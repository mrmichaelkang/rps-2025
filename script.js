const options = document.querySelector("#options");
let userScore = 0;
let cpuScore = 0;
const userScoreDisplay = document.querySelector(".user-score");
const cpuScoreDisplay = document.querySelector(".cpu-score");
const resetBtn = document.querySelector(".reset");
const infoText = document.querySelector(".info-text");
let message = "";
let userChoice = "";


options.addEventListener("click", event => {
  let target = event.target;
  event.stopPropagation();
  if(target.classList.contains("btn")){
    userChoice = target.id;
    playGame();
  }
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  infoText.textContent = "Welcome to Rock, Paper, Scissors! Please select your option to begin!";
  cpuScore = 0
  userScore = 0;
  userScoreDisplay.textContent = userScore;
  cpuScoreDisplay.textContent = cpuScore;
  userChoice = "";
  message = "";
  resetBtn.classList.add("hide");
}

function getComputerChoice() {
  const cpuOptions = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return cpuOptions[randomNumber];
}

function playRound(userChoice, cpuChoice) {
  // Check for userChoice equals rock
  if(userChoice === "Rock" && cpuChoice === "Paper") {
    message = `You lose! ${cpuChoice} beats ${userChoice}!`;
    cpuScore += 1;
  } else if(userChoice == "Rock" && cpuChoice === "Scissors") {
     message = `You win! ${userChoice} beats ${cpuChoice}!`;
    userScore += 1;
  } else if(userChoice === "Paper" && cpuChoice === "Scissors") {
     message = `You lose! ${cpuChoice} beats ${userChoice}!`;
    cpuScore += 1;
  } else if(userChoice == "Paper" && cpuChoice === "Rock") {
     message = `You win! ${userChoice} beats ${cpuChoice}!`;
    userScore += 1;
  } else if(userChoice === "Scissors" && cpuChoice === "Rock") {
     message = `You lose! ${cpuChoice} beats ${userChoice}!`;
    cpuScore += 1;
  } else if(userChoice == "Scissors" && cpuChoice === "Paper") {
     message = `You win! ${userChoice} beats ${cpuChoice}!`;
    userScore += 1;
  } else {
     message = "It's a draw!";
  }
  userScoreDisplay.textContent = userScore;
  cpuScoreDisplay.textContent = cpuScore;
  infoText.textContent = message + " Select an option to continue playing"
  resetBtn.classList.remove("hide");
}

function playGame() {
  let cpuChoice;
  cpuChoice = getComputerChoice();

  playRound(userChoice, cpuChoice);
}
