'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Please enter a number.';
  } else if (guessNumber === number) {
    document.querySelector('.message').textContent = 'Correct number.';
    document.querySelector('.number').textContent = number;
    //When play wins change backgreound green
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //set high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber > number) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber < number) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
});
