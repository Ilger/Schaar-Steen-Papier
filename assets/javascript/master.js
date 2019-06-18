



// Global variables
let winLose = document.getElementById('WinLose');
let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');
let draw = document.getElementById('Draw');
let reset = document.getElementById('Reset');

let computer;
let player;

let selectRandom = (array) => array[Math.floor(Math.random()* array.length)];


let winMessage = [" You win!", " You crushed the foo"];
let tieMessage = [" It's a tie, reset and start again", " Tie break. please reset", " Reset the fight, one cannot win from the same element"];
let loseMessage = [" Auwtch, You loose", " The enemy has defeated you", " Aha, you shredded the opponent! ", " The enemy has cut you in pieces, fight again!"];


let win = () => {
  winLose.innerHTML = selectRandom(winMessage);
  winLose.style.color = 'greenText'
};
let lose = () => {
  winLose.innerHTML = selectRandom(loseMessage);
  winLose.style.color = 'red';
};
let tie = () => {
  winLose.innerHTML = selectRandom(tieMessage);
  winLose.style.color = 'blue';
};


//addEventListener function
let buttonClick = (buttonId, executeFn) => buttonId.addEventListener('click', executeFn);

// test buttonEvent fn
buttonClick(draw, () => console.log('draw button'));

buttonClick(rock , () => player = 'rock');
buttonClick(paper , () => player = 'paper');
buttonClick(scissors , () => player = 'scissors');





let actionFunction = () => {
  // test button player choice
  console.log(player);
  let theTreeWeapons = ['rock','paper','scissors'];
  computer = selectRandom(theTreeWeapons)

  console.log(computer);

  if (player === computer) {
    tie();
  }
  else if (player === 'rock' && computer === 'scissors') {
    win();
  }
  else if (player === 'rock' && computer === 'paper') {
    lose();
  }
  else if (player === 'scissors' && computer === 'paper') {
    win();
  }
  else if (player === 'scissors' && computer === 'rock') {
    lose();
  }
  else if (player === 'paper' && computer === 'rock') {
    win();
  }
  else if (player === 'paper' && computer === 'scissors') {
    lose();
  }
  else {
    winLose.innerHTML = 'Choose a Weapon';
  }
};

buttonClick(draw, actionFunction);

buttonClick(reset, () => {window.location.reload(true)});
