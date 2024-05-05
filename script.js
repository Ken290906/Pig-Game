'use strict';

var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');

var scorePlayer0 = document.querySelector('#score--0');
var scorePlayer1 = document.querySelector('#score--1');

var currentScore0 = document.querySelector('#current--0');
var currentScore1 = document.querySelector('#current--1');

var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var allbtn = document.querySelector('.btn');

let scores, currentScore, playing, activePlayer;
const diceIM = document.querySelector('.dice');

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  diceIM.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playing = true;
};

init();

const switchPlayer = function () {
  document.querySelector(`player--${activePlayer}`);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // if(activePlayer !== 0) {
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceIM.classList.remove('hidden');
    if (dice !== 1) {
      diceIM.src = `dice-${dice}.png`;
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      var playerWinner = document.querySelector(`.player--${activePlayer}`);
      playerWinner.classList.add('player--winner');

      var contactPlayer = document.querySelector(`#name--${activePlayer}`);
      contactPlayer.classList.add('name');
    } else {
      switchPlayer();
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  diceIM.classList.add('hidden');
});
