'use strict';
let guessNmuber=Math.trunc(Math.random()*20)+1;
let score=Number(document.querySelector('.score').textContent);
let historyMaxSocre=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='No Number!';
    }else{
        if(guess>guessNmuber){
            document.querySelector('.message').textContent='To High';
            score--;
            document.querySelector('.score').textContent=score;
        }else if(guess<guessNmuber){
            document.querySelector('.message').textContent='To Low';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='Correct Number!';
            if(historyMaxSocre<score){
                historyMaxSocre=score;
            }
            document.querySelector('.number').textContent=guessNmuber;
            document.querySelector('.highscore').textContent=historyMaxSocre;
        }
    }
});
document.querySelector('.again').addEventListener('click', function(){
    guessNmuber=Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent='?';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing...';
})