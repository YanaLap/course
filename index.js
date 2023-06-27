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
// 1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое
// меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

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

// 2  Написать функцию, которая принимает три отдельные цифры и превращает их в
// одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function getNumber(numberA, numberB, numberC){
//    console.log(`Ваше число ${numberA}${numberB}${numberC}`)
// }
// getNumber(5,2,3)

// 3 .Написать функцию, которая принимает длину и ширину прямоугольника и
// вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет
// площадь квадрата

// function getSquare(width = length, length = width) {

//    console.log(length * width)
// }
// getSquare(3)



// Дз 5
// 1. Запросить у пользователя число и вывести все делители этого числа.


// let number = +prompt ('Введіть число');


// for(let i=1; i<=number; i++){
//   if (number%i === 0){
//    alert (`Ваші числа ${i}`)
//   }
// }

// 2. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let summ = +prompt('Введіть сумму покупки')
// if (summ >= 200 && summ < 300) {
//    alert(`Вам потрібно заплатити ${summ - summ * 3 / 100}`)
// } else if (summ >= 300 && summ < 500) {
//    alert(`Вам потрібно заплатити ${summ - summ * 5 / 100}`)
// } else if (summ >= 500) {
//    alert(`Вам потрібно заплатити ${summ - summ * 7 / 100}`)
// } else {
//    alert(`При цій суммі немає скидок`)
// }

// 3. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За
// каждый правильный ответ начисляется 2 балла. После вопросов выведите
// пользователю количество набранных баллов.

// let season = prompt('Яка зараз пора року a)зима b)весна c)літо')
// let country = prompt('В яку країну ви поїдете на відпочинок a)Чорногорія b)Болгарія c)Грузія')
// let animals = prompt("Яка домашня тваринка у вас з`явиться a)собака b)кішка c)папуга")
// let result = 0

// function getNumber() {
//    if (season === 'c' || season === 'C') {
//       result = result + 2
//    }
//    if (country === 'a' || country === 'A') {
//       result = result + 2
//    }

//    if (animals === 'a' || animals === 'A') {
//       result = result + 2
//    }
// alert(`Ви набрали ${result} балів`)
// }
// getNumber(season, country, animals)

// 4 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите
// возможность перехода на следующий месяц, год, а также високосный год.

// let day = +prompt('Введіть день')
// let month = +prompt('Введіть місяць')
// let year = +prompt('Введіть рік')

// let a = year % 400;
// let b = year % 4;
// let c = year % 100;

// const day31 = 31
// const dayDec = 31
// let dayFeb = 28
// const day30 = 30

// function checkNumber(number) {
//    if (number < 10 && number > 0) {
//       return `0${number}`
//    }
//    return number
// }


// if (a === 0 || (b === 0 && c !== 0)) {
//    if (month === 2) {
//       dayFeb = 29
//    }
// }

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//    if (day === dayDec && month === 12) {

//       alert(`01.01.${checkNumber(year + 1)}`)
//    } else if (day < day31) {
//       alert(`${checkNumber(day + 1)}.${checkNumber(month)}.${checkNumber(year)}`)
//    } else if (day = day31) {
//       alert(`01.${checkNumber(month + 1)}.${checkNumber(year)}`)
//    }
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//    if (day < day30) {
//       alert(`${checkNumber(day + 1)}.${checkNumber(month)}.${checkNumber(year)}`)
//    } else if (day = day30) {
//       alert(`01.${checkNumber(month + 1)}.${checkNumber(year)}`)
//    }

// } else if (month === 2) {
//    if (day < dayFeb) {
//       alert(`${checkNumber(day + 1)}.${checkNumber(month)}.${checkNumber(year)}`)
//    } else if (day === dayFeb) {
//       alert(`01.${checkNumber(month + 1)}.${checkNumber(year)}`)
//    } else if (day > dayFeb) {
//       alert(`Невірний формат дати`)
//    }
// } else {
//    alert(`Невірний формат дати`)
// }

// 5.
// Объявить две переменные a и b и задать им целочисленные произвольные
// начальные значения. Затем написать скрипт, который работает по следующему
// принципу:
// - если a и b положительные, вывести их разность (ноль можно считать
// положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

// let a = 5
// let b = 7
// function getnumber() {
//    if (a >= 0 && b >= 0) {
//       return a - b
//    }
//    if (a < 0 && b < 0) {
//       return a * b
//    }
//    return a + b
// }
// console.log(getnumber())

// 6. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
// двумя параметрами. Т.е. например, функция для сложения должна принимать
// два числа, складывать их и возвращать результат. Обязательно использовать
// оператор return.

// function getSumm(a, b) {
//    return a + b
// }
// console.log(getSumm(5, 5))

// function getSubtraction(a, b) {
//    return a - b
// }
// console.log(getSubtraction(5, 5))

// function getMultiplication(a, b) {
//    return a * b
// }
// console.log(getMultiplication(5, 5))

// function getdivision(a, b) {
//    return a / b
// }
// console.log(getdivision(5, 5))


// 7. Есть две команды по гимнастике, дельфины (Dolphins) и коалы (Koalas). Они
// соревнуются друг с другом 3 раза. Победитель с наибольшим средним баллом
// выигрывает приз!
// Ваши задачи:
// - Рассчитайте средний балл для каждой команды, используя приведенные ниже
// данные теста
// - Сравните средние баллы команды, чтобы определить победителя
// соревнования, и выведите его на консоль. Не забывайте, что может быть ничья,
// поэтому проверьте и это (ничья означает, что у них одинаковый средний балл).
// Доп. условие 1: включите требование о минимальном количестве баллов 100. С
// помощью этого условия команда выигрывает только в том случае, если у нее
// больше очков, чем у другой команды, и в то же время она набрала не менее 100
// очков. Подсказка: Используйте логический оператор для проверки
// минимального балла, а также нескольких блоков else-if
// Доп. условие 2: Минимальный балл также приравнивается к ничьей! Таким
// образом, ничья происходит только в том случае, если обе команды набрали
// одинаковое количество очков и обе набрали больше или равно 100 очкам. В
// противном случае ни одна команда не выиграет приз.
// Тестовые данные:
// Данные 1: Дельфины набрали 96, 108 и 89 баллов. Коалы набирают 88, 91 и 110
// баллов


// function getDolphins(a, b, c) {
//    return ((a + b + c) / 3)

// }
// const resultDolphinsData1 = getDolphins(96, 108, 89)

// function getKoalas(a, b, c) {
//    return ((a + b + c) / 3)
// }
// const resultKoalasData1 = getDolphins(88, 91, 110)
// function showWinner(resultDolphins, resultKoalas) {
//    if (resultDolphins > resultKoalas && resultDolphins >= 100) {
//       console.log("Виграли Дельфіни");
//    } else if (resultDolphins < resultKoalas && resultKoalas >= 100) {
//       console.log("Виграли Коали");
//    } else if (resultDolphins === resultKoalas && resultDolphins >= 100 && resultKoalas >= 100) {
//       console.log("Нічия");
//    } else {
//       console.log("Ніхто не набрав мінімальний бал");
//    }
// }
// showWinner(resultDolphinsData1, resultKoalasData1)

// // Данные 2: Дельфины набрали 97, 112 и 101 балл. Коалы набрали 109, 95 и 123
// // балла
// const resultDolphinsData2 = getDolphins(97, 112, 101)
// const resultKoalasData2 = getDolphins(109, 95, 123)
// showWinner(resultDolphinsData2, resultKoalasData2)
// // Данные 3: Дельфины набрали 97, 112 и 101 балл. Коалы набрали 109, 95 и 106
// // баллов
// const resultDolphinsData3 = getDolphins(97, 112, 101)
// const resultKoalasData3 = getDolphins(109, 95, 106)
// showWinner(resultDolphinsData3, resultKoalasData3)

// 8 Стивен хочет создать очень простой калькулятор чаевых для тех случаев, когда
// он ходит обедать в ресторан. В его стране обычно дают чаевые в размере 15%,
// если стоимость счета составляет от 50 до 300. Если значение отличается, то
// чаевые составляют 20%.
// Ваши задачи:
// - Рассчитайте чаевые в зависимости от стоимости счета. Создайте для этого
// переменную под названием "подсказка" (tip).
// - Не разрешается использовать оператор if / else (Если вам так проще, вы
// можете начать с оператора if / else, а затем попытаться преобразовать его в
// тернарный оператор! Луше если не будете использовать помощь WebStorm по
// преобразованию if/else в тернарный оператор)
// - Выведите на консоль строку, содержащую стоимость счета, чаевые и конечную
// стоимость (счет + чаевые). Пример: “Счет составил 275 долларов, чаевые
// составили 41,25 доллара, а общая стоимость 316.25”
// Тестовые данные:
// Данные 1: Тест на номиналы банкнот 275, 40 и 430
// Подсказки:
// - Чтобы рассчитать 20% от значения, просто умножьте его на 20/100 = 0,2
// - Значение X находится в диапазоне от 50 до 300, если оно >= 50 && <= 300

// let money1 = 275;
// let money2 = 40;
// let money3 = 430;

// function calculation(number) {
//    const tip = (number >= 50 && number < 300) ? number * 15 / 100 : (number > 300) ? number * 20 / 100 : 0
//    console.log(`Счет составил ${number - tip} долларов, чаевые составили ${tip} доллара, а общая стоимость ${number}`)
// }
// calculation(money1)
// calculation(money2)
// calculation(money3)