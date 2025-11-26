const options = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

function getHumanChoice() {
  const userChoice = Number(prompt("Choose an option:\n1. Rock\n2. Paper\n3. Scissors"));
  return options[userChoice - 1
  ];
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
  let userChoice;

  for(let i = 0; i < 5; i++) {
    cpuChoice = getComputerChoice();
    userChoice = getHumanChoice();
    playRound(userChoice, cpuChoice);
    console.log(`User score: ${userScore}\nCPU Score: ${cpuScore}`);
  }

  playRound(userChoice, cpuChoice);
}


playGame();