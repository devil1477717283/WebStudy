'use strict';
let score = 0;
let score1 = 0;
let score2 = 0;
let round = 0;
let num = 0;
document.querySelector('.btn--roll').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 6 + 1);
  let image = `dice-${num}.png`;
  document.querySelector('.dice').setAttribute('src', image);
  if (num != 1) {
    score += num;
  } else {
    score = 0;
  }
  if (round % 2 == 0) {
    document.querySelector('#current--0').textContent = score;
  } else {
    document.querySelector('#current--1').textContent = score;
  }
  if (num === 1 && round % 2 == 0) {
    score = 0;
    round++;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('#current--0').textContent = 0;
  } else if (num === 1 && round % 2 != 0) {
    score = 0;
    round++;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#current--1').textContent = 0;
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (round % 2 == 0) {
    score1 += score;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('#score--0').textContent = score1;
    document.querySelector('#current--0').textContent = 0;
  } else {
    score2 += score;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#score--1').textContent = score2;
    document.querySelector('#current--1').textContent = 0;
  }
  score = 0;
  round++;
});
document.querySelector('.btn--new').addEventListener('click', function () {
  if (round % 2 == 1) {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
});
