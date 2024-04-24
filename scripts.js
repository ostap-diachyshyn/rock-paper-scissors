const resultTxt = document.querySelector('.result');
const moveTxt = document.querySelector('.move');
const scoreTxt = document.querySelector('.score');

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }


  if (result === 'You win') {
    score.wins = score.wins + 1;
  } else if (result === 'You lose') {
    score.losses = score.losses + 1;
  } else if (result === 'Tie') {
    score.ties = score.ties + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  /*
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

  */

  resultTxt.innerHTML = result;

  moveTxt.innerHTML = `You picked ${playerMove} - Computer picked ${computerMove}`;

  updateScore();

  moveTxt.innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">`;
}

function updateScore() {
  scoreTxt.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}