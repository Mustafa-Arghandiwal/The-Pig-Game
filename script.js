

var scores, activePlayer, roundScore, tempDice,winningScore, inputWinningScore, playing;
winningScore = 100;

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    playing = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');



}

function toggle() {
    document.querySelector('#current--' + activePlayer).textContent = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
        
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

init();





document.querySelector('.btn--roll').addEventListener('click', function () {

    if (playing){

        var dice = (Math.floor(Math.random() * 6) + 1);
        
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        //Lose all score if rolled back to back sixes
        if (tempDice === 6) {
            if (dice === 6) {
                scores[activePlayer] = 0;
                document.querySelector('#score--' + activePlayer).textContent = 0;
                toggle();
                document.querySelector('.dice').style.display = 'block';
            }
        }
        tempDice = dice;

    
        if (dice !== 1) {
            roundScore += dice
            document.querySelector('#current--' + activePlayer).textContent = roundScore
    
        } else {
            toggle();
    
        }
    }

})  //roll function







document.querySelector('.btn--hold').addEventListener('click', function () {

    if (playing){
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            playing = false;
            return;
        
        }
        toggle();

    }

}) //hold function







document.querySelector('.btn--new').addEventListener('click', function () {

    init();
    
})



//sidepanel shit

function openNav(){
    document.getElementById('mySidepanel').style.width = '200px';
}
function closeNav() {
    document.getElementById('mySidepanel').style.width = '0';
}

document.querySelector('.setScore').addEventListener('click', function() {
    while (true) {
        inputWinningScore = prompt('Enter the winning score (default=100):');
        inputWinningScore = parseInt(inputWinningScore);

        if (Number.isInteger(inputWinningScore)) {
            break;
        } else {
            alert('Please enter a number!');
            continue;
        }
    }
    winningScore = inputWinningScore;
    document.querySelector('.winning-score-number').textContent = winningScore;
    
    
})

document.querySelector('.gameRules').addEventListener('click', function(){
    document.querySelector('.rules-div').style.visibility = 'visible';
    document.querySelector('.rules-div').style.opacity = '1';
    
})

document.querySelector('.rules-ok').addEventListener('click', function() {
    document.querySelector('.rules-div').style.visibility = 'hidden';
    document.querySelector('.rules-div').style.opacity = '0';
})







