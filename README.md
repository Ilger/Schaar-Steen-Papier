# Schaar-Steen-Papier


The problem with the switch statement for our use. Is that for the case argument we can't use our logical operators ( = the && and the || or statements). So we are stuck with if else if we want to keep the code simple to understand.

This is how I wrote it:
First I made a named function for the three different printouts
```
  let win = () => winLose.innerHTML = 'A Win';
  let lose = () => winLose.innerHTML = 'A Loss';
  let tie = () => winLose.innerHTML = 'A Tie';

```
I like the different messages u used. You could put them in an array and put the random array item selector in a function. So it is usable for the computer's Weapon choice and the message print.


So the only differences are I used a single if for a tie outcome.
```

let actionFunction = () => {
  // test button player choice
  console.log(player);
  let theTreeWeapons = ['rock','paper','scissors'];
  computer = theTreeWeapons[Math.floor(Math.random()*theTreeWeapons.length)];

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
```
