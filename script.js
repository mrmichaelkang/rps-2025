const options = document.querySelector("#options");
let userScore = 0;
let cpuScore = 0;
let userChoice = "";

options.addEventListener("click", event => {
  let target = event.target;

  if(target.classList.contains("btn")){
    userChoice = target.id;
    playGame();
  }
});

function getComputerChoice() {
  const cpuOptions = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return cpuOptions[randomNumber];
}

function playRound(userChoice, cpuChoice) {
  // Check for userChoice equals rock
  if(userChoice === "Rock" && cpuChoice === "Paper") {
    console.log(`You lose! ${cpuChoice} beats ${userChoice}!`);
    cpuScore += 1;
  } else if(userChoice == "Rock" && cpuChoice === "Scissors") {
    console.log(`You win! ${userChoice} beats ${cpuChoice}!`);
    userScore += 1;
  } else if(userChoice === "Paper" && cpuChoice === "Scissors") {
    console.log(`You lose! ${cpuChoice} beats ${userChoice}!`);
    cpuScore += 1;
  } else if(userChoice == "Paper" && cpuChoice === "Rock") {
    console.log(`You win! ${userChoice} beats ${cpuChoice}!`);
    userScore += 1;
  } else if(userChoice === "Scissors" && cpuChoice === "Rock") {
    console.log(`You lose! ${cpuChoice} beats ${userChoice}!`);
    cpuScore += 1;
  } else if(userChoice == "Scissors" && cpuChoice === "Paper") {
    console.log(`You win! ${userChoice} beats ${cpuChoice}!`);
    userScore += 1;
  } else {
    console.log("It's a draw!");
  }
}

function playGame() {
  let cpuChoice;

  cpuChoice = getComputerChoice();
  playRound(userChoice, cpuChoice);
  console.log(`User score: ${userScore}\nCPU Score: ${cpuScore}`);

  playRound(userChoice, cpuChoice);
}
