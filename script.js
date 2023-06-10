'use strict';
//----------------------------------------------------------------------
// Variables / Bindings
//----------------------------------------------------------------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//----------------------------------------------------------------------
// Functions
//----------------------------------------------------------------------
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (number) {
  document.querySelector('.score').textContent = number;
};

//----------------------------------------------------------------------
// Check click event button
//----------------------------------------------------------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no input
  if (!guess) {
    displayMessage('No Number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    changeBackground('#60b347');
    changeWidth('30rem');
    // Checks for highscore on win
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

//----------------------------------------------------------------------
// Again click event button
//----------------------------------------------------------------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBackground('#222');
  changeWidth('15rem');
});
