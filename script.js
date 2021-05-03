const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");

const computerPlay = () => {
  let choices = ["Rock", "Paper", "Scissors"];

  var item = choices[Math.floor(Math.random() * choices.length)];

  return item;
};

let userScore = 0;
let computerScore = 0;
rock.addEventListener("click", function () {
  let computerSelection = computerPlay();
  // * Rock Cases
  if (computerSelection === "Scissors") {
    userScore = userScore + 1;
    results.innerText = `You win! Computer picked ${computerSelection}`;
  } else if (computerSelection === "Paper") {
    computerScore = computerScore + 1;
    results.innerText = `You lose! Computer picked ${computerSelection}`;
  } else if (computerSelection === "Rock") {
    results.innerText = `It's a tie!! Both of you picked ${computerSelection}`;
  }
});

paper.addEventListener("click", function () {
  let computerSelection = computerPlay();
  // * Paper Cases
  if (computerSelection === "Rock") {
    userScore = userScore + 1;
    results.innerText = `You win! Computer picked ${computerSelection}`;
  } else if (computerSelection === "Scissors") {
    computerScore = computerScore + 1;
    results.innerText = `You lose! Computer picked ${computerSelection}`;
  } else if (computerSelection === "Paper") {
    results.innerText = `It's a tie!! Both of you picked ${computerSelection}`;
  }
});

scissors.addEventListener("click", function () {
  let computerSelection = computerPlay();
  // * Scissors Cases
  if (computerSelection === "Paper") {
    userScore = userScore + 1;
    results.innerText = `You win! Computer picked ${computerSelection}`;
  } else if (computerSelection === "Rock") {
    computerScore = computerScore + 1;
    results.innerText = `You lose! Computer picked ${computerSelection}`;
  } else if (
    
    computerSelection === "Scissors"
  ) {
    results.innerText = `It's a tie!! Both of you picked ${computerSelection}`;
  }
});
