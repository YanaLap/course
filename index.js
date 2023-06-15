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







