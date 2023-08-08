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

// 0.

// let a = 5;
// let b = a++ + 5;
// let c = ++a + --b;
// c -= 5;
// a *= 2;
// console.log(a + b + c)

// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
// температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
// Tf = (9 / 5) * Tc + 32;
// где Tf – температура по Фаренгейту, Tc – температура по Цельсию

// const temp = +prompt("Введіть температуру по Цельсію");
// const formula = (9 / 5) * temp + 32;
// alert(`Температура по Фаренгейту ${formula}`);

// 2. Объявить две переменные: admin и name. Записать в name строку "Василий".
// Скопировать значение из name в admin. Вывести в консоль переменную admin
// (должно вывести "Василий"
// let name = "Василий";

// let admin = name;
// console.log(admin);

// 3. Вывести в консоль значения выражений и объяснить почему получились такие
// значения используя комментарии к каждому выражению:
// 10 + 10 + "10";
// 10 + "10" + 10;
// 10 + 10 + +"10"; (обратите внимание на пробелы, пишите также)
// 10 / -""

// console.log(10 + 10 + "10") //2010
// console.log(10 + "10" + 10)  //101010
// console.log(10 + 10 + +"10") //30

// console.log(10 / -"") //-infinity

// 5. Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у
// него останется.


// let sum = +prompt('Введіть сумму грошей у гаманці'); //21
// let сhockoled = +prompt('Введіть ціну за шоколадку');  //5
// let quantity = (sum - sum%сhockoled )/сhockoled

// alert (`Ви можете купити ${quantity} шоколадок, i у вас залишиться ${sum%сhockoled} грошей`)

// 6. Запросите у пользователя целое число и выведите в ответ, четное число или нет.

// let number = +prompt('Введіть число, щоб дізнатися парне воно чи ні')

// if (number % 2 === 0) {
//    alert('Ваше число є парним')
// } else {
//    alert('Ваше число непарне')
// }

// 7.  Запросите у пользователя трехзначное число и выведите его задом наперед. Для
// решения задачи вам понадобится оператор % (остаток от деления)

// let number = +prompt('Введіть трьохзначне число')
// alert('Ваше число' + ' ' + (number % 10) + (Math.floor(number / 10) % 10) + (Math.floor(number / 100) % 10))

// Дз 3

// 1 Запросить у пользователя его возраст и определить, кем он является:
// ребенком (0–2), подростком (12–18), взрослым (18_60) или
// пенсионером (60– ...).
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

// 2  Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

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


// 3. Запросить у пользователя трехзначное и число и проверить, есть ли в
// нем одинаковые цифры.


// let number = +prompt('Введіть 3-значне число. Цифри не мають повторюватись')

// let a = Math.floor((number / 100) % 10);

// let b = Math.floor((number / 10) % 10);
// let c = number % 10;

// if (a === b || a === c || b === c) {
//    alert('У введеній цифрі є повтори')
// } else {
//    alert('Цифри не повторюються')
// }

// 4 Запросить у пользователя год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен
// 100

// let year = +prompt('Введіть рік')

// let a = year % 400;
// let b = year % 4;
// let c = year % 100;

// if (a === 0 || (b === 0 && c !== 0)) {
//    alert('Цей рік в')
// }else{
//    alert('Звичайний рік')
// }


// 5 Марк и Джон пытаются сравнить свой BMI (индекс массы тела),
// который рассчитывается по формуле:
// BMI = mass / height ** 2 = mass / (height * height) (mass в kg
// и height в метрах).
// Нужно:
// - Сохранить массу и рост Марка и Джона в переменных
// - Рассчитайте оба их индекса массы тела по формуле.
// - Создайте логическую переменную 'markHigherBMI', содержащую
// информацию о том, имеет ли Марк более высокий BMI, чем Джон.
// Тестовые данные:
// Данные 1: Маркс весит 78 кг и имеет рост 1,69 м. Джон весит 92 кг и
// составляет 1,95 м ростом.
// Данные 2: Маркс весит 95 кг и имеет рост 1,88 м. Джон весит 85 кг и
// составляет 1,76 м ростом.

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

// 1 Используйте пример BMI из задачи № 1 и код, который вы уже
// написали, и улучшите его.
// Ваши задачи:
// - Выведите на консоль информацию с указанием того, у кого BMI выше.
// Примерное сообщение звучит так: " BMI Марка выше, чем у Джона!"
// или " BMI Джона выше, чем у Марка!"
// 2. Используйте обратные кавычки для включения значений BMI в
// выходные данные. Пример: "Марка BMI (28,3) выше, чем у Джона
// (23,9)!"
// Подсказка: Используйте оператор if/else

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

// 4
//  Написать функцию, которая вычисляет факториал переданного ей числа.
// function fr (n){
//    if (n===1){
//       return 1
//    }
//     return n * fr (n-1)
// }
// console.log(fr (5))


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

// ДЗ 6

// 1. Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxx

// function pyramid(n) {
//    if (n === 1) {
//       console.log('x')
//       return 'x'

//    }
//    let marker = 'x' + pyramid (n-1)
//       console.log(marker)
//    return marker
// }
// pyramid(20)


// 2. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс». Если при вызове функции
// минуты и/или секунды не были переданы, то выводить их как 00.

// a)
// let hours = +prompt('Введіть години')
// let minutes = +prompt('Введіть хвилини')
// let seconds = +prompt('Введіть секунди')
// function watch(a, b, c) {
//    alert(`Час ${a}:${b}:${c}`)
// }
// watch(hours, minutes, seconds)

// b

// 3. Написать функцию, которая принимает часы, минуты и секунды и
// возвращает это время в секундах.
// let hours = +prompt('Введіть години')
// let minutes = +prompt('Введіть хвилини')
// let seconds = +prompt('Введіть секунди')
// function watch(a, b, c) {
//    alert(`Секунд ${a*3600+b*60+c}`)
// }
// watch(hours, minutes, seconds)

// 4. Написать функцию, которая принимает количество секунд, переводит
// их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// let seconds = +prompt('Введіть секунди')

// function watch(a) {
//    let hours = Math.floor(a / 3600);
//    let minutes = Math.floor((a - hours * 3600) / 60);
//    let sec = Math.floor(a - hours * 3600 - minutes * 60);
//    alert(`Час ${hours}:${minutes}:${sec}`)
// }
// watch(seconds)

// 5. Написать функцию, которая считает разницу между датами. Функция
// принимает 6 параметров, которые описывают 2 даты, и возвращает
// результат в виде строки «чч:мм:сс». При выполнении задания используйте
// функции из предыдущих 2-х заданий: сначала обе даты переведите в
// секунды, узнайте разницу в секундах, а потом разницу переведите обратно в
// «чч:мм:сс».

// let hours1 = +prompt('Введіть години 1 дня');
// let minutes1 = +prompt('Введіть хвилини 1 дня');
// let seconds1 = +prompt('Введіть секунди 1 дня');

// let hours2 = +prompt('Введіть години 2 дня');
// let minutes2 = +prompt('Введіть хвилини 2 дня');
// let seconds2 = +prompt('Введіть секунди 2 дня');

// function difference(a, b, c, d, e, f) {
//    let secondsData1 = a * 3600 + b * 60 + c;
//    let secondsData2 = d * 3600 + e * 60 + f;
//    let result = Math.abs(secondsData1 - secondsData2)

//    let resultHours = Math.floor(result / 3600);
//    let resultMinutes = Math.floor((result - resultHours * 3600) / 60);
//    let resultSeconds = Math.floor(result - resultHours * 3600 - resultMinutes * 60);
//    alert(`Різниця  ${resultHours}:${resultMinutes}:${resultSeconds}`)
// }

// difference(hours1, minutes1, seconds1, hours2, minutes2, seconds2)


// ДЗ7
// 1.  Запросить у пользователя 10 чисел и подсчитать, сколько он ввел
// положительных, отрицательных и нулей. При этом также посчитать, сколько
// четных и нечетных. Вывести статистику на экран.

// let number1 = +prompt('Введіть число 1')
// let number2 = +prompt('Введіть число 2')
// let number3 = +prompt('Введіть число 3')
// let number4 = +prompt('Введіть число 4')
// let number5 = +prompt('Введіть число 5')
// let number6 = +prompt('Введіть число 6')
// let number7 = +prompt('Введіть число 7')
// let number8 = +prompt('Введіть число 8')
// let number9 = +prompt('Введіть число 9')
// let number10 = +prompt('Введіть число 10')
// let negativeNumbers = 0
// let positiveNumbers = 0
// let zeroNumbers = 0
// let evenNumbers = 0
// let oddNumbers = 0

// let numbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10]
// for (let i = 0; i < numbers.length; i++) {

//    if (numbers[i] < 0) {
//       negativeNumbers++
//    }
//    else if (numbers[i] > 0) {
//       positiveNumbers++
//    } else {
//       zeroNumbers++
//    }
//    if (numbers[i] % 2 === 0) {
//       evenNumbers++
//    } else {
//       oddNumbers++
//    }
// }
// alert(`Позитивних чисел ${negativeNumbers}, негативних чисел ${positiveNumbers}, нульових чисел ${zeroNumbers}, парних чисел ${evenNumbers}, непарних чисел ${oddNumbers}`)


// 2
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить
// пример, вывести результат и спросить, хочет ли он решить еще один пример. И
// так до тех пор, пока пользователь не откажется.


// let result


// function calcFunction(a, b, c) {
//    if (b === '+') {
//       return a + c;
//    } else if (b === '-') {
//       return a - c;
//    } else if (b === '*') {
//       return a * c;
//    } else if (b === '/') {
//       return a / c;
//    }
// }

// let calc = true
// do {

//    let number1 = + prompt('Введіть число 1')
//    let sign = prompt('Введіть знак')
//    let number2 = + prompt('Введіть число 2')
//    alert(calcFunction(number1, sign, number2))
//    calc = confirm("Чи хочете Ви рішати далі?")

// }
// while (calc)


// 3.  Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть
// следующий день?» и так до тех пор, пока пользователь нажимает OK

// let day = ['Понеділок','Вівторок','Середа','Четверг','П"ятниця','Субота','Неділя']
// let result
// let i=0
// do{
//      result = confirm (`День тижня - ${day[i]}. Хочете побачити наступний день тижня?`)
// i++
// if (i>=day.length){
//    i=0
// }
// }
// while (result)


// 4.Написать функцию, которая выводит все числа из заданного пользователем
// диапазона в прямом порядке. И еще одну функцию – для вывода в обратном
// порядке

// let numberOne = +prompt('Введіть початок діапазона')
// let numberLast = +prompt('Введіть кінець діапазона')
// let result = []
// let result2 = []
// function directOrder(a, b) {

//    for (i =a; i <= b; i++) {
//       result.push(i)

//    }
//    alert(result)
// }

// (directOrder(numberOne, numberLast))

// function reverseOrder(a, b) {

//    for (i = b; i >= a; i--) {
//       result2.push(i)

//    }
//    alert(result2)
// }

// (reverseOrder(numberOne, numberLast))

// 5. Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
// Примечание: Последовательность Фибоначчи - это последовательность чисел:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... Каждое последующее число является суммой двух
// предыдущих.

// let number = 21;
// let pastNumber = 0;
// let pastNumber2 = 1;
// let result = 0
// function fibonachi(a) {

// }
// fibonachi(number)


// 6. Напишите функцию JavaScript для вычисления множителей положительного
// целого числа.


// function factors(n) {
// let result = []
//    for (i = 1; i <= n; i++)
//       if (n % i === 0){
//          result.push(i)
//               }
//       return  result
//    }
//       document.writeln(factors(18)); // [1,2,3,6,9,18]
// factors(19); // [1,19]
// // factors(20); // [1,2,4,5,10,20]

// 7. Найдите сумму всех целых нечетных чисел, всех целых четных чисел в
// промежутке от n до m. Результат вывести в формате:
// <сумма_четных_чисел – сумма_нечетных_чисел>

// let n = 2;
// let m = 10;
// let result=0;
// let resultMinus=0
// function summPlus(i){
//   for (let i = a; i<=m; i++){
//    if (i>m){
//       return;
//    }
//    if (i%2===0){
//          result = result + i;
//          summPlus(++i);
//        }
//     else{
//          resultMinus = resultMinus + i;
//          summPlus(++i);
//        }
//    }
// }

// summPlus(n)
// console.log (resultMinus, result)

// 2
// function summPlus(a){
//      for (let i = a; i<=m; i++){
//       if(i%2===0){
//          result = i + result
//             }
// else{
//    resultMinus = i + resultMinus
// }
//    }
// }

// summPlus(n)
// console.log (resultMinus, result)


// дз8

// 1

// Дан массив с числами. Найдите сумму квадратов элементов этого массива
// let masiv = [1,2,3,4,5,6,7,8,9]
// let result = 0
// function square (a){
// for (i=0; i<a.length;i++){
// result = Math.pow(a[i],2)
// console.log(result)
// }

// }
// square(masiv)

// 2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого
// массива.
// let masiv = [1,4,9,16,25,36,49,64,81]
// let result = 0
// function square (a){
// for (i=0; i<a.length;i++){
// result+= Math.sqrt(a[i],2)

// }

// console.log(result)
// }
// square(masiv).

// 3. Дан массив с числами. Найдите сумму положительных элементов этого
// массива.

// let masiv = [2,-4,5,6,-10,8,-15,3,5,-15,-7]
// let result=0
// function square (a){
//    for (i=0; i<a.length;i++){
//       if(a[i]>0){
// result+=a[i]
//       }
//    }
//    console.log(result)
//    }
//    square(masiv)

// 4.

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые
// больше нуля и меньше десяти.

// let masiv = [2,-4,5,6,-10,8,-15,3,5,-15,-7,22,11,10]
// let result=0
// function square (a){
//    for (i=0; i<a.length;i++){
//       if(a[i]>0 && a[i]<10){
// result+=a[i]
//       }
//    }
//    console.log(result)
//    }
//    square(masiv)

// 5. Напишите код, который преобразовывает и объединяет все элементы
// массива в одно строковое значение. Элементы массива будут
// разделены запятой.

// var vegetables = ['Капуста', 'Буряк', 'Редиска', 'Морква']
// let result = ""
// function square(a) {
//    for (i = 0; i < a.length; i++) {

//       if (i<a.length-1){
//      result += a[i] + ", "

//       }
//       else if (i===a.length-1){
//      result += a[i]

//    }
//    }
// }

// square(vegetables)
// console.log(result)

// 6
// Найдите наименьший четный элемент массива. Если такого нет, то
// выведите первый элемент.

// let masiv = [22, 20, 4, 40, 5, 60, 7, 8, 3]
// let result = masiv [0]
// function square(a) {
//    for (i = 1; i < a.length -1; i++) {

//       if (a[i] % 2 === 0 && result < a[i]) {
//          result = a[i]
//       }
//       else {
//          result = a[0]
//       }

//    }
//    return result
// }
// console.log(square(masiv))

// 7.
// Найдите сумму номеров минимального и максимального элементов.


// let array = [2, 1, 10, 20, 7, 6, 30, 12, 4]
// let indexMin = 0
// let min = array[0]
// let indexMax = 0
// let max = array[0]
// for (let i = 1; i < array.length; i++) {
//    if (min > array[i]) {
//       min = array[i]
//       indexMin = i
//    }
//    if (max < array[i]) {
//       max = array[i]
//       indexMax = i
//    }
// }
// let sum = indexMin + indexMax
// console.log(sum)






// let masiv = [10, 20, 30, 40, 5, 60, 7, 8, 3]
// let resultMin = 0
// let resultMax = 0

// function square(a) {
//    for (i = 0; i < a.length - 1; i++) {
//       if (a[i] > a[i+1]) {
//          resultMax = a[i]
//       }
//       else{
//          resultMax = x[i + 1]
//                }


//    //    if (a[i] < a[i+1]) {
//    //       resultMin = a[i]
//    //    }
//    // }

// }
// return resultMax
// }
// console.log((square(masiv)))

// let array = [2, -7, 5, 0, 10, 20, 7, 6, -5, 30, 4]

// function three(x) {

//    let resultMin = 0
//    let resultMax = 0
//    for (let i = 0; i < x.length - 1; i++) {
//       if (x[i] > x[i + 1]) {
//          resultMax = x[i]
//       }
//       if (x[i] < x[i + 1]) {
//          resultMin = x[i]
//       }
//       else {
//          // result = x[i + 1]
//       }
//    }
//    console.log(resultMax)
//    console.log(resultMin)
//    console.log(resultMax + resultMin)
// }
// three(array)


// let array = [2, 5, 10, 20, 7, 6, 30, 0, 4]

// function three(x) {
//    let result = 0;
//    for (let i = 0; i < x.length - 1; i++) {
//       if (x[i] > x[i + 1]) {
//          result = x[i]
//       }
//       else {
//          // result = x[i + 1]
//       }
//    }
//    return result
// }
// console.log(three(array))

// дз 9
// 1
// Дано некоторое число: 12345 Получите массив цифр этого числа (обратите внимание,
// что дана не строка, а именно число)
// let number = 12345;
// let array = (String(number)).split('')
// console.log(array)
// 2
// Дано некоторое число: 12345 Переверните его: 54321
// let number = 12345;
// number = (String(number)).split('').reverse().join('')
// console.log(number)
// 3
// Дано некоторое число: 12345 Найдите сумму цифр этого числа.
// let number = 12345;
// let masiv = (String(number)).split('');

// let sum = masiv.reduce((sum, item) => {
//    return sum + +item;
//    }, 0);
//    console.log(sum)

// або

// let number = 12345;
// let masiv = (String(number)).split('');
// let sum = 0;
// masiv.forEach(function(num) {
// sum += +num;
// });
// console.log(sum);
// // або
// let number = 12345;
// let masiv = (String(number)).split('');
// let sum=0
// for(let number of masiv){
//    sum+=+number

// }
// console.log(sum)

// 4
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

// let masiv = [1,2,3,4,5];

// for (let i=0; i<masiv.length; i++){
//    masiv[i]=  masiv[i]+ masiv[i]*0.1
// }
// console.log (masiv)

// або
// let masiv = [1,2,3,4,5];
// masiv= masiv.map(i=>i+i*0.1)
// console.log (masiv)

// 5 // Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// let masiv = [1, 2, 3, 4, 5, 6];
// let result = [];
// function getMassiv(arr, b=2) {
// arr.forEach((element, index, array) => {
//    result.push(element);

//    if (result.length === 2) {
//       console.log(result);
//       result.length = 0;
//    }
// });

// while (a.length > 0) {
//    let mas1 = a.splice(0, b);
//    result.push(mas1);
// }
// return result;
// console.log
// }

// getMassiv(masiv);

// 6
// Дана строка. Показать номера символов, совпадающих с последним
// символом строки.

// let str = 'gfmjgfm jg,i g.ivfgfg'
// let masiv = str.split('')
// let masiv1 = []


// for(i=0;i<masiv.length;i++){
//    if((masiv[ masiv.length-1])===masiv[i]){
//       console.log(i)
//    }

// }

// 7 Дана строка. Если ее длина больше 10, то оставить в строке только первые
// 6 символов, иначе дополнить строку символами 'o' до длины 12
// let str = 'iojg'
// let len = str.length
// if (len > 10) {
//    str = str.substring(0, 6)
// }
// else {
//    for (i = 0; str.length < 12; i++) {
//       str = str + '0'
//    }
// }
// console.log(str)

// дз10

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в
// диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих
// свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть
// пустой объект.

// let number = 45;
// let arr= (String(number)).split('')

// let obj = {
// tens: 0,
// units: 0,
// hundereds: 0
// };

// function getobj (a){
//    if (a<10 && a>0){
//       obj.tens=+arr[0];
//       }
//    else if (a<=99 && a>=10){
//    obj.tens=+arr[0];
//    obj.units=+arr[1];
//    }

//    else if (a<=999 && a>=100){
//       obj.tens=+arr[0];
//       obj.units=+arr[1];
//       obj.hundereds=+arr[2]
//       }
//    else{
//       console.log(`число не в діапазоні`)
//       obj={}
//    }
// }

// getobj(number)
// console.log(obj)



// 2. Функция принимает на вход массив вида:
// Const animal = [[“typeName”, “jaguar”], [“speed”, 80], [“weight”, 80], [“height”, 75],
// [“gender”, “male”], [“yearOfBirth”, 4] ]
// Результат работы функции: объект, в котором ключом является первый элемент из пар
// значений, а второй элемент его значением. Напр. [[“building”, “home”]] => {building:
// “home”} – данный массив содержит одну пару ключ-значение, т.о. на выходе объект,
// только с одним свойством. В вашем случае будет объект с несколькими свойствами.

// const animal = [["typeName", "jaguar"], ["speed", 80], ["weight", 80], ["height", 75],
// ["gender", "male"], ["yearOfBirth", 4]]

// let obj = {}

// function getObj(a) {
//    do {
//       let resultMasiv = a.splice(0, 1)
//       obj[resultMasiv[0][0]] = resultMasiv[0][1]
//       } while (a.length)
//       console.log(obj);
// }

// getObj(animal)
// function getMassiv(arr, b=2) {
//    arr.forEach((element, index, array) => {
//       result.push(element);

//       if (result.length === 2) {
//          console.log(result);
//          result.length = 0;
//       }
//    });

// або
// const animal = [["typeName", "jaguar"], ["speed", 80], ["weight", 80], ["height", 75],
// ["gender", "male"], ["yearOfBirth", 4]]
// let obj = {}



// function getObj(a) {
//    a.forEach(element => {

//             obj[element[0]] = element[1]
// })
// console.log(obj);

// }
// getObj(animal)

// або
// const animal = [["typeName", "jaguar"], ["speed", 80], ["weight", 80], ["height", 75],
// ["gender", "male"], ["yearOfBirth", 4]]

// console.log(Object.fromEntries(animal))

// 3. Реализовать функцию, осуществляющую обратное, заданию 2, преобразование, т.е.
// из объекта в массив, каждый элемент которого это массив из двух значений [ключ объекта,
// значение ключа]

// let obj = {
//    typeName: 'jaguar',
//    speed: 80,
//    weight: 80,
//    height: 75,
//    gender: 'male',
//    yearOfBirth: 4
//  }

//  console.log(Object.entries(obj));
// або
// let arr = []
// for (element in obj){
//    if (obj.hasOwnProperty(element)) {
//       arr.push([element, obj[element]])
//   }
// }
// console.log(arr)

// Дз 11
// Задание 2: Создать объект, хранящий в себе отдельно числитель и
// знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

// let obj = {
//    numerator1: 168,
//    denominator1: 240,
//    addition: function (a, b) {
//       console.log(a + b)
//    },
//    subtraction: function (a, b) {
//       console.log(a - b)
//    },
//    multiplication: function (a, b) {
//       console.log(a * b)
//    },
//    division: function (a, b) {
//       console.log(a / b)
//    },

//    reduction: function (a, b) {
//       for (i = 1; i <= a; i++) {
//          if (a % i === 0 && b % i === 0) {
//             c = a / i
//             d = b / i
//          }

//       }
//       console.log(c, d)
//    }
// }
// obj.addition(obj.numerator1, obj.denominator1)
// obj.subtraction(obj.numerator1, obj.denominator1)
// obj.multiplication(obj.numerator1, obj.denominator1)
// obj.division(obj.numerator1, obj.denominator1)
// obj.reduction(obj.numerator1, obj.denominator1)

// Задание 1: Создать объект, описывающий автомобиль (производитель,
//    модель, год выпуска, средняя скорость), и следующие функции для работы с
//    этим объектом.
//    1. Функция для вывода на экран информации об автомобиле.
//    2. Функция для подсчета необходимого времени для преодоления
//    переданного расстояния со средней скоростью. Учтите, что через
//    каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let obj = {
//    manufacturer: "Ingolstadt",
//    model: "Audi",
//    yearOfIssue: 2016,
//    speed: 50,

//    info: function () {
//       document.write("<pre>");
//       document.write(JSON.stringify(obj));
//       document.write("</pre>");
//    },

//    time: function (a) {
//       let time = (a / this.speed)

//       if (time > 4 && time % 4 !== 0) {
//          time = (Math.floor(time / 4)) + time
//       }
//       else if (time > 4 && time % 4 === 0) {
//          time = (Math.floor(time / 4)) + time - 1
//       }
//       console.log(time)
//    }

// }

// obj.info()
// obj.time(1400)


// Задание 3: Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое
// количество и куплен или нет. Написать несколько функций для работы с таким
// массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли
// некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с
// уже существующим в списке продуктом, необходимо увеличивать
// количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта и отмечает
// его как купленный

// let shoppingList = [
//    {
//       title: "milk",
//       count: 5,
//       isBought: true
//    },
//    {
//       title: "egg",
//       count: 10,
//       isBought: false
//    },
//    {
//       title: "flour",
//       count: 500,
//       isBought: false
//    },
//    {
//       title: "tomatos",
//       count: 3,
//       isBought: true
//    },
//    {
//       title: "cucumbers",
//       count: 4,
//       isBought: true
//    },
//    {
//       title: "pepper",
//       count: 2,
//       isBought: false
//    }
// ]

// function list() {

//    for (i = 0; i < shoppingList.length - 1; i++) {
//       for (j = i + 1; j < shoppingList.length; j++) {
//          if (shoppingList[i].isBought > shoppingList[j].isBought) {
//             const no = shoppingList[i]
//             shoppingList[i] = shoppingList[j]
//             shoppingList[j] = no

//          }
//       }
//       const str = `<pre>product: ${shoppingList[i].title}, count: ${shoppingList[i].count}, bought: ${shoppingList[i].isBought ? 'Yes' : 'No'};</pre>`
//       document.write(str);

//    }



// }
// list(shoppingList)

// // 2
// function addProduct(arr, a) {
//    let product = arr.find(product => product.title === a)
//    if (product) {
//       product.count++
//    }
//    else {
//       const newProduct = {
//          title: a,
//          count: 1,
//          isBought: false
//       }
//       arr.push(newProduct)
//    }
// }

// addProduct(shoppingList, "milk")
// console.log(shoppingList)

// 3
// function buy(arr, a) {
//    let product = arr.find(product => product.title === a)
//    if (product) {
//       product.isBought = true
//    }
// }

// buy(shoppingList, "flour");
// console.log(shoppingList);
