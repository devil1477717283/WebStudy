'use strict';
let score = 0;
let score1 = 90;
let score2 = 0;
let round = 0;
let num = 0;
document.querySelector('.btn--roll').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 6 + 1);
  let image = `dice-${num}.png`;
  if (num != 1) {
    score += num;
  } else {
    score = 0;
  }
  if (round % 2 == 0 && score2<100 && score1<100) {
    document.querySelector('#current--0').textContent = score;
    document.querySelector('.dice').setAttribute('src', image);
  } else if(round%2==1 && score2<100 && score1<100) {
    document.querySelector('#current--1').textContent = score;
    document.querySelector('.dice').setAttribute('src', image);
  }
  if (num === 1 && round % 2 == 0 && score2<100 && score1<100 ) {
    score = 0;
    round++;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('#current--0').textContent = 0;
  } else if (num === 1 && round % 2 != 0 && score2<100 && score1<100) {
    score = 0;
    round++;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#current--1').textContent = 0;
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (round % 2 == 0 && score2<100 && score1<100) {
    score1 += score;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('#score--0').textContent = score1;
    document.querySelector('#current--0').textContent = 0;
    if(score1>=100){
      document.querySelector('.player--0').classList.add('player--winner')
      document.querySelector('#current--0').textContent = 0;
      document.querySelector('#score--0').textContent = 0;
    }
  } else if(round % 2 == 1 && score2<100 && score1<100){
    score2 += score;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#score--1').textContent = score2;
    document.querySelector('#current--1').textContent = 0;
    if(score2>=100){
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('#score--1').textContent = 0;
      document.querySelector('#current--1').textContent = 0;
    }
  }
  score = 0;
  round++;
});
document.querySelector('.btn--new').addEventListener('click', function () {
  if(score1>=100){
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }else if(score2>=100){
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }else{
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
  score1=0;
  score2=0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  round=0;
});
