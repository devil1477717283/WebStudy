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
            if(score<=0){
                document.querySelector('.message').textContent='You losed the game';
                score=0;
            }
            document.querySelector('.score').textContent=score;
        }else if(guess<guessNmuber){
            document.querySelector('.message').textContent='To Low';
            score--;
            if(score<=0){
                document.querySelector('.message').textContent='You losed the game';
                score=0;
            }
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='Correct Number!';
            if(historyMaxSocre<score){
                historyMaxSocre=score;
            }
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.number').textContent=guessNmuber;
            document.querySelector('.highscore').textContent=historyMaxSocre;
        }
    }
});
document.querySelector('.again').addEventListener('click', function(){
    guessNmuber=Math.trunc(Math.random()*20)+1
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing...';
})