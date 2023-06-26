// Дз1
// 1.

// let name = prompt('Введіть своє імя')
// alert('Привіт,' + " " + name + '!!!')

// 2.
// const yearNow = 2023
// let yearBirth = +prompt('Введіть рік народження')
// alert('В цьому році Вам' + ' ' + (yearNow - yearBirth) + ' ' + 'років')

// 3.
// let length = prompt('Вкажіть довжину сторони квадрата (см)')
// alert('Периметр квадрата' + ' ' + length * 4 + ' ' + 'cм')

// 4.

// const PI = 3.14
// let radius = +prompt('Введіть радіус кола (см)')
// alert('Площа кола' + ' ' + (PI * radius ** 2) + ' ' + 'см2')

// 5.
// let km = +prompt('Вкажіть відстань між двома містами')
// let time = +prompt('Вкажіть бажаний час (год)')
// alert('Щоб встигнути Вам потрібно їхати' + ' ' + (km / time) + ' ' + 'км/год')
// 6.

// const euro = 0.93
// let $ = +prompt ('Введіть $ для перерахунку в Є')
// alert(($*euro) + ' '+ 'Є')

// ДЗ 2


// let number = +prompt('Введіть число, для отримання модуля')
// if (number < 0) {
//    alert('Ваше число' + ' ' + -number)
// } else {
// alert('Ваше число' + ' ' + number)
// }

// let a = 5;
// let b = a++ + 5;
// let c = ++a + --b;
// c -= 5;
// a *= 2;
// console.log(a + b + c)

// 1.
// const temp = +prompt("Введіть температуру по Цельсію");
// const formula = (9 / 5) * temp + 32;
// alert(`Температура по Фаренгейту ${formula}`);

// 2.
// let name = "Василий";

// let admin = name;
// console.log(admin);

// 3.

// console.log(10 + 10 + "10") //2010
// console.log(10 + "10" + 10)  //101010
// console.log(10 + 10 + +"10") //30

// console.log(10 / -"") //-infinity 

// 4.

// let sum = +prompt('Введіть сумму грошей у гаманці'); //21
// let сhockoled = +prompt('Введіть ціну за шоколадку');  //5
// let quantity = (sum - sum%сhockoled )/сhockoled

// alert (`Ви можете купити ${quantity} шоколадок, i у вас залишиться ${sum%сhockoled} грошей`)

// 6.

// let number = +prompt('Введіть число, щоб дізнатися парне воно чи ні')

// if (number % 2 === 0) {
//    alert('Ваше число є парним')
// } else {
//    alert('Ваше число непарне')
// }

// 7.
// let number = +prompt('Введіть трьохзначне число')
// alert('Ваше число' + ' ' + (number % 10) + (Math.floor(number / 10) % 10) + (Math.floor(number / 100) % 10))

// Дз 3

// 1

// let age = +prompt('Введіть свій вік');
// if (age >= 0 && age <= 2) {
//    alert('Ви дитина')
// } else if (age >= 12 && age < 18) {
//    alert('Ви підліток')
// } else if (age >= 18 && age < 60) {
//    alert('Ви дорослий')
// } else if (age >= 60) {
//    alert('Ви пенсіонер')
// } else if (age < 0) {
//    alert('Некоректно введені дані')
// }else{
//    alert('Ми не знаємо хто ви')
// }

// 2
// let number = +prompt('Введіть число від 0 до 9, щоб дізнатися його спецсимвол')
// switch (number) {
//    case 0:
//       alert('Ваш символ ")"')
//       break;
//    case 1:
//       alert('Ваш символ "!"')
//       break;
//    case 2:
//       alert('Ваш символ "@"')
//       break;
//    case 3:
//       alert('Ваш символ "#"')
//       break;
//    case 4:
//       alert('Ваш символ "$"')
//       break;
//    case 5:
//       alert('Ваш символ "%"')
//       break;
//    case 6:
//       alert('Ваш символ "^"')
//       break;
//    case 7:
//       alert('Ваш символ "&"')
//       break;
//    case 8:
//       alert('Ваш символ "*"')
//       break;
//    case 9:
//       alert('Ваш символ "("')
//       break;
//    default: alert('Не вірно введені дані')
// }


// 3

// let number = +prompt('Введіть 3-значне число. Цифри не мають повторюватись')

// let a = Math.floor((number / 100) % 10);

// let b = Math.floor((number / 10) % 10);
// let c = number % 10;

// if (a === b || a === c || b === c) {
//    alert('У введеній цифрі є повтори')
// } else {
//    alert('Цифри не повторюються')
// }

// 4

// let year = +prompt('Введіть рік')

// let a = year % 400;
// let b = year % 4;
// let c = year % 100;

// if (a === 0 || (b === 0 && c !== 0)) {
//    alert('Цей рік в')
// }else{
//    alert('Звичайний рік')
// }


// 5
// 1 дані

// let mMark = 78;
// let hMark = 1.69;
// let mDjon = 92;
// let hDjon = 1.95;

// let BMImark = (mMark / hMark ** 2).toFixed(2)
// let BMIdjon = (mDjon / hDjon ** 2).toFixed(2)
// let markHigherBMI = 'Марк имеет более высокий BMI'

// 2 дані

// mMark = 95;
// hMark = 1.88;
// mDjon = 85;
// hDjon = 1.76;

// BMImark = (mMark / hMark ** 2).toFixed(2)
// BMIdjon = (mDjon / hDjon ** 2).toFixed(2)
// let markHigherBMI = 'Джон имеет более высокий BMI'

// 1

// if (BMImark > BMIdjon) {
//    console.log('BMI Марка выше, чем у Джона!');
// } else {
//    console.log('BMI Джона выше, чем у Марка!');
// }

// 2

// if (BMImark > BMIdjon) {
//    console.log(`BMI Марка (${BMImark}) выше, чем у Джона (${BMIdjon})!`);
// } else {
//    console.log(`BMI Джона (${BMIdjon}) выше, чем у Марка (${BMImark})! `);
// }

// дз 4
// 1

// function getNumber(numberA, numberB) {
//    if (numberA > numberB) {
//       return 1
//    }
//    if (numberA === numberB) {
//      return 0
//    }
//      return -1
//   }
// console.log(getNumber(5, 10))

// 2
// function getNumber(numberA, numberB, numberC){
//    console.log(`Ваше число ${numberA}${numberB}${numberC}`)
// }
// getNumber(5,2,3)

// 3

// function getSquare(width = length, length = width) {

//    console.log(length * width)
// }
// getSquare(3)

// Дз 5
// 1. 
