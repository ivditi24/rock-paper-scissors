const computerScoreDisplay = document.querySelector('.computer');
const userScoreDisplay = document.querySelector('.user');
const displayWinner = document.querySelector('.winner');

const icons = document.querySelectorAll('img');


let userScore = 0;
let computerScore = 0;


icons.forEach(icon => icon.addEventListener('click', e => {
    const pair = [];
    const compChoice = getComputerChoice();
    const imgToAnimate = document.querySelector(`img[data-value="${compChoice}"]`);
    pair.push(e.target.dataset.value, compChoice);
    animateComputerChoice(imgToAnimate);
    playRound(pair);
    
    if(userScore === 3 || computerScore === 3) {
        if(userScore > computerScore) {
            displayWinner.textContent = 'You win!';
        } else if(userScore < computerScore) {
            displayWinner.textContent = 'You lose!';
        } else {
            displayWinner.textContent = 'It is a tie!';
        }
        playAgain();
    }

}));


function playAgain() {
    const overlay = document.querySelector('.overlay');
    const button = document.querySelector('button');
    
    overlay.style.display = 'block';
    button.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
        displayWinner.textContent = '';
        overlay.style.display = 'none';
    }); 
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function animateComputerChoice(choice) {
    choice.classList.add('choice');

    choice.addEventListener('animationend', () => {
        choice.classList.remove('choice');
    });
}

function playRound(pair) {
    const userWinningPairs = [
                ['paper', 'rock'],
                ['rock', 'scissors'],
                ['scissors', 'paper']
            ];
        
            if(pair[0] === pair[1]) {
                return;
            }
        
            for(let i = 0, l = userWinningPairs.length; i < l; i++) {
                if(JSON.stringify(pair) === JSON.stringify(userWinningPairs[i])) {
                    userScore++;
                    userScoreDisplay.textContent = userScore;
                    return;
                }
            }
        
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            return;
        
}



















