'use strict';

// SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3.Check for the result of the dice roll
  if (dice !== 1) {
    // Add to current score
    currentScore += +dice;
    current0El.textContent = currentScore;
    // CHANGE LATER
  } else {
    // if 1 : switch to the next player
  }
});
