



// Global variables
let winLose = document.getElementById('Win-Lose');
let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');
let draw = document.getElementById('Draw');
let reset = document.getElementById('Reset');
let computer;
let player;

//addEventListener function
let buttonEvent = (buttonId, executeFn) => buttonId.addEventListener('click', executeFn);

// test buttonEvent fn
buttonEvent(draw, () => console.log('draw button'));
