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
