



// Global variables
let winLose = document.getElementById('Win-Lose');
let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');
let draw = document.getElementById('Draw');
let reset = document.getElementById('Reset');

let computer;
let player;

let win = () => winLose.innerHTML = 'A Win';
let lose =() => winLose.innerHTML = 'A Loss';
let tie = () => winLose.innerHTML = 'A Tie';


//addEventListener function
let buttonClick = (buttonId, executeFn) => buttonId.addEventListener('click', executeFn);

// test buttonEvent fn
buttonClick(draw, () => console.log('draw button'));

// test button player choice
console.log(player);


buttonClick(draw, actionFunction);
