'use strict';

// let diceRoll = 0;

// const diceRollFunc = function() {   
//      diceRoll = Math.trunc(Math.random()* 6) + 1;
//      console.log(diceRoll);
// }

// console.log(diceRoll);

// document.querySelector('.btn--roll').addEventListener('click', diceRollFunc);

// document.querySelector('#current--0').value = diceRoll;
// // console.log(document.querySelector('#current--0').value = diceRoll);
// // document.querySelector('#current--0').textContent = diceRoll;

// const diceRoll = function(){

// }

function getRandomNumber() {
    return Math.trunc(Math.random()* 6) + 1;
}

const diceRoll = function() {
    const dice = getRandomNumber();
    const currentDiceValue = document.querySelector('#current--0').textContent = dice;

    console.log(currentDiceValue);

    
}


document.querySelector('.btn--roll').addEventListener('click', diceRoll);



