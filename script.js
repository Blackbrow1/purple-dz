'use strict'

// let users = [
//   {
//     id: 1,
//     name: 'Вася'
//   },
//   {
//     id: 2,
//     name: 'Петя'
//   },
//   {
//     id: 1,
//     name: 'Вася'
//   },
// ];

// const unique = new Set(users.filter((item, index, arr) => index === arr.findIndex((t) => t.id === item.id && t.name === item.name)));
// console.log(unique);

// // function getNumber(min, max) {
// // return Math.floor(Math.random() * (max - min + 1) + min)
// // }

// // console.log(getNumber(2, 3));

// // dice
// function simulatingDice(dice) {
//   const diceArr = dice.split('');
//   diceArr.shift();
//   let diceStr = diceArr.join('');
  
//   if (Number(diceStr) % 2 !== 0) {
//     return 'Число должно быть чётным'
//   }
  
//   if (Number(diceStr) < 4) {
//     return 'Число не поддерживается. Должно быть больше'
//   }
  
//   if (Number(diceStr) > 20) {
//     return 'Число не поддерживается. Должно быть меньше'
//   }
  
//   if (Number(diceStr) === 14 || Number(diceStr) === 18) {
//     return 'Число должно быть больше или меньше'
//   }
  
//   return Math.floor(Math.random() * Number(diceStr) + 1);
// }
  
// console.log(simulatingDice('D16'));

// function isValidationAge(ageStr) {
//   const birthday = new Date(ageStr);
//   const nowDate = Date.now();
  
//   const userAge = (nowDate - Number(birthday)) / (1000 * 60 * 60 * 24 * 365);
  
//   if (userAge > 14) {
//     return true;
//   }
    
//   return false;
// }
    
// console.log(isValidationAge('2010-06-09'));

// //timer NY
// const timerPlace = document.querySelector('.timer');

// function getDaysToNY(date) {
//   const end = Number(new Date()) + Number(new Date(date));
//   setInterval(() => {
//     timerPlace.textContent = new Intl.DateTimeFormat('ru-RU', {
//       minute: 'numeric',
//       second: 'numeric'
//     }).format(new Date(end))
//   }, 1000);

//   // setTimeout(() => {
//   //   clearInterval(interval);
//   //   console.log('!!!');
//   // }, value)
// }

// console.log(getDaysToNY('12-31-2024'));

// // const end = new Date('12/31/2024');
// // const now = new Date(Date.now());
// // const value = end - now;

// // console.log(value / (1000 * 60 * 60 * 24));


// // // pizza timer
// // function getCookedPizza(time) {
// //   const end = new Date().getTime() + time;
// //   const interval = setInterval(() => {
// //     console.log(
// //       new Intl.DateTimeFormat('ru-RU', {
// //         minute: 'numeric',
// //         second: 'numeric'
// //       }).format(end + 100 - new Date())
// //     );
// //   }, 1000);

// //   setTimeout(() => {
// //     clearInterval(interval);
// //     console.log('!!!');
// //   }, time)
// // }

// // console.log(getCookedPizza(5000));


// // 5-oop
// const Character = function (race, name, language) {
//   this.race = race;
//   this.name = name;
//   this.language = language;
// }

// Character.prototype.speak = function() {
//   console.log(this.language, this.name);
// }

// const Ork = function(weapon) {
//   this.weapon = weapon;
// }

// Ork.prototype.hit = 'Удар';
// Ork.prototype.spell = 'Абракадабра';
// Ork.prototype.createSpell = function() {
//   console.log('Логика создания заклинания');
// };

// const Genry = new Character('Зимбабве', 'Михайло', 'фарси');
// Ork.__proto__ = Genry;
// const ork = new Ork('нож');

// console.log(ork);

// // 6-class
// class Car {
//   #make;
//   #model;
//   #run;
//   constructor(make, model, run) {
//     this.#make = make;
//     this.#model = model;
//     this.#run = run;
//   }

//   changeRun(newRun) {
//     this.#run = newRun
//   }

//   get run() {
//     return this.#run;
//   }

//   get model() {
//     return this.#model;
//   }

//   get make() {
//     return this.#make;
//   }

//   info() {
//     console.log(this.make, this.model, this.run);
//   }
// }

// const mercedes = new Car('Mercedes', 'CLA', '3km');
// console.log(mercedes);
// console.log(mercedes.changeRun('6km'));
// console.log(mercedes);
// console.log(mercedes.info());

// // 7 oop in class

// class Person {
//   constructor(race, name, lang) {
//     this.race = race;
//     this.name = name;
//     this.lang = lang;
//   }

//   speak() {
//     console.log(`${this.race} ${this.name} ${this.lang}`);
//   }
// }

// class Orc extends Person {
//   constructor(race, name, lang, weapon) {
//     super(race, name, lang);
//     this.weapon = weapon;
//   }
// }

// class Elf extends Person {
//   constructor(race, name, lang, spell) {
//     super(race, name, lang);
//     this.spell = spell;
//   }

//   createSpell() {
//     console.log('Создаем заклинание');
//   }

//   speak() {
//     console.log(`${this.race} ${this.name} ${this.lang} ${this.spell}`);
//   }
// }

// const orc1 = new Orc('Mars', 'Michailo', 'Marsiana', 'Topol-M');
// const elf1 = new Elf('Russia', 'Ivan', 'Russian', 'Word');
// console.log(orc1.speak());
// console.log(elf1.speak());

// // 8 solid
// class Billing {
//   #amount;

//   calculateTotal() {
    
//   }
// }

// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products/');
// request.send();

// request.addEventListener('load', function() {
//   const {products} = JSON.parse(this.responseText);

//   console.log(products);

//   const sum = products.reduce((acc, p) => {return acc += p.price}, 0);
//   console.log(sum / products.length);
// });

// 9 pokemon
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
  const {abilities} = JSON.parse(this.responseText);
  console.log(abilities[0].ability.url);

  const request = new XMLHttpRequest();
  request.open('GET', abilities[0].ability.url);
  request.send();

  request.addEventListener('load', function() {
    const {effect_entries} = JSON.parse(this.responseText);
    console.log(effect_entries[1].effect);
  })
});