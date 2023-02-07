/* Обьект */

// const user = {
//     names: 'Антошка',
//     ages: 19,
//     weight: 70,
//     height: 1.7,
//     isHuman: true
// };

// let abs = 'Тимур'

// for (const key in user) {
//     // console.log('Ключ: ' + key + ' Значение ключа: ' + user[key]);
//     console.log(`Ключ: ${key} Значение ключа: ${user[key]}`);

// }


// delete user.isHuman

// console.log('from' in user);
// console.log(user);
// user.from = 'Узбекистан';
// user['1'] = 'Ташкент';


// console.log(user);




// console.log(user.isHuman, user.names, user.ages);

// let a = +prompt('Введите возраст')


// const user = {
//     names: 'Федька',
//     age: a,
//     weight: 4,
//     calcWeight: function () {
//         return this.age * this.weight
//     }
// }

// console.log('Вес Федьки ' + user.calcWeight() + ' кг ');


// const users = {
//     '1': {
//         names: 'Сашка',
//         ages: 20
//     },
//     '2': {
//         names: 'Танюша',
//         ages: 18
//     },
//     '3': {
//         names: 'Олег',
//         ages: 2
//     },
//     '4': {
//         names: 'Боорис',
//         ages: 50
//     }
// }


// for (const key in users) {
//     // console.log(key);
//    for (const keys in users[key]) {
//     console.log(users[key][keys]);
//    }
// }

// console.log(users);

// let rec = receipt();
// let menu = 'Вы заказали '
// let delivery = 9000;





// let all = ['Яблоко', 'Виноград', 'Банан', 'Клубника', 'Груша'];


// all[90] = 'арбуз'
// console.log(all);



// all.unshift('картошка')  /* Добавляет в начало массива */
// console.log(all);

// all.shift()              /* Удаляет с конца  массива */
// console.log(all);

// all.push('лук')
// console.log(all);         /* Добавляет в конец массива */

// all.pop()
// console.log(all);          /* Удаляет  с конца массива */

// all.reverse()
// console.log(all);            /* переварачивает массив   */




// let all = ['Яблоко', 'Виноград', 'Банан', 'Клубника', 'Груша'];
// console.log(all.length);

// for (let i = 0; i < 5; i++) {
// console.log(all[i]);

// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let x = 0; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log('четное ${arr[i]}');
//     x++;
//   } else {
//     console.log('не четное ${arr[i]}');
//   }

// }

// console.log('${x} четных чисел');



// console.log(typeof arr);

//  let all = ['Яблоко', 'Виноград', 'Банан', 'Клубника', 'Груша'];
//  console.log(all);
//  let str =  all.splice(0,2) 

// console.log(all);

//  for (const key in all) {
//   all[key] == 'Яблоко' ? all.splice(key, 2): ''

//  }
//  console.log(all);

// let str = 'легковосприимчивый'

// for (let i = 0; i < str.length; i++){
//   console.log(str[i]);
// }



// let str = 'привет как дела  что делаешь, сижу, лежу, тужу, пужу '

// let x = str.split(' ');
// console.log(x);



let arr = []

for (let i = 0; i < Infinity; i++) {
  let word = prompt('Введите слово '),
    wordArr = word.split(' ')
  if (wordArr[0] == 'add') {
    arr.push(wordArr[1])
  } else if (wordArr[0] == 'del') {
    for (let i = 0; i < arr.length; i++) {
      arr[i] == wordArr[1] ? arr.splice(wordArr[1], 1) : '';
    }
  } else if (wordArr[0] == 'stop') {
    break;
  }
  console.log(arr);
}

console.log(arr);