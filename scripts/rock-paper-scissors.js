let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

document.querySelector(".js-result").innerHTML = "What are you waiting for!?";
document.querySelector(".js-moves").innerHTML = "Pick a move!";

/*
        if (!score) {
          score = {
            wins: 0,
            losses: 0,
            ties: 0
    
          }
        }
  */

updateScore();

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {
//Arrow function does not support hoisting
//};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});
document
  .querySelector(".js-reset-score-button")
  .addEventListener("click", () => {
    resetScore();
  });
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    resetScore();
  }
});
/*
  When adding a function you cant run another function
  it will result in undefined because it doesnt actually
  result in a function it results in the return value of that function
  instead call the function inside of the created function () => {callFunction();};
  */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose!";
    } else if (computerMove === "paper") {
      result = "You Win!!!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win!!!";
    } else if (computerMove === "paper") {
      result = "Tie!";
    } else if (computerMove === "scissors") {
      result = "You Lose!";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!";
    } else if (computerMove === "paper") {
      result = "You Lose!";
    } else if (computerMove === "scissors") {
      result = "You Win!!!";
    }
  }

  if (result === "You Win!!!") {
    score.wins += 1;
  } else if (result === "You Lose!") {
    score.losses += 1;
  } else if (result === "Tie!") {
    score.ties += 1;
  }

  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
      <img src="/images/${playerMove}-emoji.png" class="js-result-images">
      <img src="/images/${computerMove}-emoji.png" class="js-result-images">
      Computer`;

  localStorage.setItem("score", JSON.stringify(score));

  /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
  Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);*/
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Losses:${score.losses} Wins:${score.wins} Ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  console.log(computerMove);

  return computerMove;
}

function resetScore() {
  if (score.wins > 0 || score.ties > 0 || score.losses > 0) {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;
    localStorage.removeItem("score");
    document.querySelector(".js-result").innerHTML =
      "What are you waiting for!?";
    document.querySelector(".js-moves").innerHTML = "Pick a move!";
  }

  console.log(score);
  updateScore();
}
