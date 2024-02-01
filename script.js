'use strict';

// SELECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// PLAYER SWITCH FUNCTION
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;
// STARTING CONDITIONS
const initialization = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // 1. set the current score and total score to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // 2.remove the dice
  diceEl.classList.add('hidden');
  // 3.remove winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // 4.Switch to player 0
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
initialization();

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.Check for the result of the dice roll
    if (dice !== 1) {
      // Add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // if 1 : switch to the next player
      // Reset current score
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if the player's score >= 100
    // If so finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initialization);
