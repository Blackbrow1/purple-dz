'use strict'

let users = [
{
id: 1,
name: 'Вася'
},
{
id: 2,
name: 'Петя'
},
{
id: 1,
name: 'Вася'
},
];

const unique = new Set(users.filter((item, index, arr) => index === arr.findIndex((t) => t.id === item.id && t.name === item.name)));
console.log(unique);

// function getNumber(min, max) {
// return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getNumber(2, 3));

// dice
function simulatingDice(dice) {
  let diceArr = dice.split('');
  diceArr.shift();
  let diceStr = diceArr.join('');
  
  if (Number(diceStr) % 2 !== 0) {
  return 'Число должно быть чётным'
  }
  
  if (Number(diceStr) < 4) {
  return 'Число не поддерживается. Должно быть больше'
  }
  
  if (Number(diceStr) > 20) {
  return 'Число не поддерживается. Должно быть меньше'
  }
  
  if (Number(diceStr) === 14 || Number(diceStr) === 18) {
  return 'Число должно быть больше или меньше'
  }
  
  return Math.floor(Math.random() * Number(diceStr) + 1);
  }
  
  console.log(simulatingDice('D16'));