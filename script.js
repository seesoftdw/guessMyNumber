'use strict';

// generating the random number that will be the answer which we have to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// creating a function to prevent duplicacy
const displayMessage = function(message){
  document.querySelector('.message').textContent= message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
//when there is no input
  if (!guess) {
    // before : document.querySelector('.message').textContent = 'No Number!';
    // after : 
    displayMessage('No Number!');
  } 
  
//when user wins
  else if (guess === secretNumber) {
    // before : document.querySelector('.message').textContent = 'Correct Number!';
    // after : 
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } 

// when the guess is wrong
else if(guess !== secretNumber){
  if (score > 1) {
    // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You Lost The Game!';
    displayMessage('You Lost The Game!');
    document.querySelector('.score').textContent = 0;
  }
}

// this code was duplicated so we made a function above
  
// //when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//       document.querySelector('.score').textContent = 0;

//     }
//   }
  
// //when guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function() {
   
    score = 20;;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent= score; 

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});
