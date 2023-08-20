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
// або




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

// дз 12
//2.  Создание массива значений Фаренгейта из массива значений Цельсия:
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

// let fahrenheit = celsius.map(item => item * 1.8 + 32)
// console.log(fahrenheit)
// 3 Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
// let str = 'abcde abcde abcde';
// let arr = str.split(' ');
// let NewArr = arr.map(element => {
//    const wrdArray = element.split('') //[ 'a', 'b', 'c', 'd', 'e' ]
//    const letter = wrdArray.splice(0, 1, '!'); // wrdArray === [ '!', 'b', 'c', 'd', 'e' ] , return [ a ]
//    console.log(letter);
//    return wrdArray.join('');

// });
// let result = NewArr.join(' ')
// console.log(result)

// 4
// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подря

// let arr = [1, 2, 3, 3, 4, 5]
// const result = arr.some((element, index, arr) => index!==0 && element===arr[index-1]);


// console.log(result);

// 1
// Напишите функцию, которая принимает два аргумента и возвращает все числа,
// которые делятся на данный делитель. Первый аргумент - это массив чисел, а
// второй - делитель.
// const divisibleBy = (numbers, divisor) => {
//  let result = numbers.filter(item => item%divisor===0)
//  console.log(result)
//  }


// divisibleBy([1, 2, 3, 4, 5, 6], 2)

// 5
// В цепочках ДНК символы «A» и «T» дополняют друг друга, как «C» и «G». У вас
// есть функция с половиной ДНК; вам нужно получить вторую половину. Нить ДНК
// никогда не бывает пустой.
// Input: строка заглавных латинских букв (A, T, C, G)
// Output: строка заглавных латинских букв
// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"
// Пример входных данных
// Ожидаемый результат
// DNAStrand("AAAA")
// 'TTTT'
// DNAStrand("ATTGC")
// 'TAACG'
// DNAStrand("GTAT")
// 'CATA

// function DNAStrand(data){
//    let arr =  data.split('')
//    let newArr = [];
//    for (i=0; i<arr.length; i++){

//       if (arr[i]==='A'){
//         newArr.push('T')
//       } else if (arr[i]==='T'){
//          newArr.push('A')
//       } else if (arr[i]==='C'){
//          newArr.push('G')
//       } else if (arr[i]==='G'){
//          newArr.push('C')
//       }

//    }
//    let result=newArr.join('')
//    console.log(result);
// }
// DNAStrand("ATTGC")
// DNAStrand ("GTAT")

// // ДЗ


/**
 * Описание задачи: Напишите функцию, которая сравнивает два
массива и возвращает true, если они идентичны.
//  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//  * Сложность задачи: 2 of 5
// //  * @param {Array} firstArray - Массив с примитивными значениями
// //  * @param {Array} secondArray - Массив с примитивными значениями
// //  * @returns {boolean}
// // */

// const isEqual = (firstArray, secondArray) => {
//    if (firstArray.length !==secondArray.length)  {
//       return false
//    }

//    for (i = 0; i < firstArray.length; i++){

//       if (firstArray[i] !== secondArray[i]){
//          return false
//       }
//    }
//    return true
// }
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false


// 1
//  * Описание задачи: Напишите функцию, возвращает новый массив
// без предоставленных значений. Используйте примитивные типы.
//  * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//  * Сложность задачи: 2 of 5
//  * @param {Array} array - Массив с примитивными значениями
//  * @param {?} args - лист значений для удаления
//  * @returns {Array}

// const without = (array, ...args) => {
//   return array.filter(item=>!args.includes(item))
// }
// const data = [1, 2, 3, 1, 2];
// console.log(without(data, 1, 2));


// 2
// Unique. Напишите функцию, которая убирает повторяющиеся
// значения.
// /**
//  * Описание задачи: Напишите функцию, которая убирает
// повторяющиеся значения.
//  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
//  * Сложность задачи: 2 of 5
//  * @param {Array<string | number>} array - Массив с примитивными
// значениями
//  * @returns {Array}

// const unique = (array) => {
//    let result = []
//    array.forEach(element => {
//       if(!result.includes(element)) result.push(element)
//    });
//    return result
// }
// const data = [1, 2, 1, 2, 3];
// console.log(unique(data)); // [1, 2, 3]

// 4. Chunk. Напишите функцию, которая разделяет массив на части
// заданного размера.
/**
 * Описание задачи: Напишите функцию, которая разделяет массив
на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4],
[5]]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
// */



// const chunk = (array, size) => {
//    let arr = [];
//    let result = [];
//    for (i = 0; i < array.length; i++) {
//       arr.push(array[i]);
//       if (arr.length === size || i === array.length - 1) {
//          result.push(arr);
//          arr = [];
//       }
//    }
//    return result;
// }
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]



// // 5
// Описание задачи: Напишите функцию, которая создаст массив из
// уникальных значений, которые есть в каждом из предоставленных
// массивов.
//  * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
//  * Сложность задачи: 4 of 5
//  * @param {?} arrays - Массив примитивных значений
//  * @returns {Array}
// */

// [[1, 2],[2, 3]]
// let number = 0;
// const intersection = (...arrays) => {
//    return arrays.reduce((acc, item) => {
//       const matches = item.filter(el => acc.includes(el)); //[2]
//       return matches;
//    });
// }

// const intersection2 = (...arrays) => arrays.reduce((acc, item) => item.filter(el => acc.includes(el)));

// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];
// console.log(intersection(arr1, arr2)) // [2]
// console.log(intersection(arr3, arr4, arr5)) // ['b']
// console.log(intersection(arr6, arr7, arr8)) // ['b', 'e'

// cw
// 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

// let str1 = 'kgfjhklj';
// let str2 = 'fghjbk ljiokjk fgjhkljuiyghbn'

// function len(a, b) {
//    if (a.length > b.length) {
//       return 1
//    } else if (a.length < b.length) {
//       return -1
//    }
//    else {
//       return 0
//    }
// }

// console.log(len(str1, str2))

// 2 Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки
// let str = 'fcgvhbj'
// function top (a){
// let topReg=a.slice(0,1).toUpperCase()+a.slice(1)
// return topReg
// }
// console.log(top(str))

// 3
// Написать функцию, которая считает количество гласных
// букв в переданной строке.

// let str = 'Yana'
// function quantity(a) {
//    let arr = a.toLowerCase().split('')
//    let result = arr.reduce((acc, item) => {
//       if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'y') {
//          acc++
//       }
//       return acc
//    }, 0)

//    return result
// }

// console.log(quantity(str));

// let str = 'yana'
// function quantity(a) {
//    let arr = a.toLowerCase().split('')
//    let arrVoiced = ['a','e','i','o','u','y']

//    let result = arr.reduce((acc, item) => {
//       if (arrVoiced.includes(item)){
//          acc++
//       }
//       return acc
//    }, 0)

//    return result
// }

// console.log(quantity(str));

// 4 Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

// let str = '100% бесплатно dgfhbcxdgnb  fxhb'
// let etalon = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх']
// function spam (a){
// bottom= a.toLowerCase()
//  let result =  etalon.some((item)=> bottom.includes(item))
//    return result
// }
// console.log(spam(str));

// 5
// Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.

// let str = 'Hello, world!'
// function cuts (a, b){
// if (a.length>b){
//    return str.slice(0,b-3)+`...`
// }
// }

// console.log(cuts(str, 8))

// 6
// Написать функцию, которая проверяет, является ли перeданная строка палиндромом
// let str = 'коту тащат уток'
// function palindrome (a) {
//        let viceVersa = a.split('').reverse().join('')
//        console.log(viceVersa);
//         return (viceVersa === a)
// }
// console.log(palindrome(str))

// 7
// Написать функцию, которая считает количество слов в
// предложении.
// let str = 'yghjknlkjhugyfgy vghbujnkjhb vghj gy gyhuj gyhh gk ghv gy yggggggg g'

// function quantity (a){
// let result = a.split(' ').length
// return result


// }
// console.log(quantity(str))

// або
// function quantity (a){

// let result = a.split(' ').reduce ((acc, item)=>{
//  acc++
//  return acc

// },0)
// return result
// }
// console.log(quantity(str))

// 9
// Написать функцию, которая считает среднюю длину слова
// в предложении

// let str = 'Зараз на вулиці світить сонечко'//5+2+6+7+7=27

// function wordLength(params) {
//  let res=  params.split(' ').reduce((acc,item)=>{
// acc = acc+ item.length
// return acc
//    },0)
//    return (res/params.split(' ').length)
// }
// console.log(wordLength(str))

// 8. Написать функцию, которая возвращает самое длинное 
// слово из предложения.
// let str = 'Зараз на вулиці світить сонце'//5+2+6+7+5
// let result = ''

// function wordLength(params) {
//    let arr = params.split(' ')

//    for (let i = 0; i < arr.length; i++) {
//       if (result.length < arr[i].length) {
//          result = arr[i]
//       }
//    }
//    return result
// }

// console.log(wordLength(str))

// function wordLength(params) {
//    let arr = params.split(' ');
//  let result =  arr.reduce((acc,item)=>{

//      if(acc.length<item.length){
//       acc = item
//      }
//      return acc
//    }) 

//    return result    
//    }

//    console.log(wordLength(str))



// 10 Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.
// let str = 'Зараз на вулиці світить сонце'

// function ind(a, b) {
//    let arr = []
//    let inpuArray = a.toLowerCase().split('')
//    inpuArray.forEach((element, index) => {
//       if (element === (b.toLowerCase())) {
//          arr.push(index)
//       }

//    });
//    console.log(`Символ зустрічається ${arr.length} рази`, arr)
// }

// ind(str, 'з')

// Д

const users = [
  {
    name: 'John',
    age: 20,
    isActive: true,
    rang: 'admin',
    salary: 1000,
    peculiarities: {
      achievements: [
        {
          name: 'Head of unit',
          stars: 2
        },
        {
          name: 'Speaker',
          stars: 1
        },
        {
          name: 'Man of the year',
          stars: 3
        }
      ]
    }
  },
  {
    name: 'Sean',
    age: 25,
    isActive: true,
    rang: 'user',
    salary: 600,
    peculiarities: {
      achievements: [
        {
          name: 'Member of community',
          stars: 1
        }
      ]
    }
  },
  {
    name: 'Jack',
    age: 19,
    isActive: true,
    rang: 'user',
    salary: 800,
    peculiarities: {
      achievements: [
        {
          name: 'Member of community',
          stars: 1
        },
        {
          name: 'Speaker',
          stars: 1
        }
      ]
    }
  },
  {
    name: 'Anna',
    age: 30,
    isActive: false,
    rang: 'user',
    salary: 400,
    peculiarities: {
      achievements: [
        {
          name: 'Member of community',
          stars: 1
        }
      ]
    }
  }
];

// 1. Написать функцию которая выводит средний возраст всех пользователей в консоль.
// function averageAge(params) {
//   return params.reduce((acc,item)=>acc+item.age,0)/params.length
//  }
// console.log(averageAge(users));

// 2. Написать функцию которая выводит имена активных пользователей и тех кто не является админом на экран в виде: "Наши пользователи: {имена ползователей через запятую}"

// let result = []
// function nameComanda(active) {
//   active.forEach(element => {
//     if (element.isActive && element.rang === 'user') {
//       result.push(element.name)
//     }

//   });
//   console.log(`Наши пользователи: ${result.join(', ')}`)
// }
// nameComanda(users)


// function nameComanda(active) {
//  let result = active.reduce((acc,item) => {
//     if (item.isActive && item.rang === 'user') {
//       const sep = acc.length ? ', ' : ''
//     acc = acc + sep + item.name

//         }
//    return acc
//   },'');
//   return (`Наши пользователи: ${result}`)
// }
// console.log(nameComanda(users))
// //3. Найти максимальную зп среди всех ползователей и админов и вывести ее в консоль
// let arr = []
// function maxSalary(a){
// for (let element of a){
//   arr.push(element.salary)
// }
// return Math.max(...arr)
// }
// console.log(maxSalary(users));

// або

// function maxSalary(a) {
//   let arr = a.map(item => item.salary)
//   return Math.max(...arr)
// }
// console.log(maxSalary(users));

//4. Вывести на экран все достижения ползователей и админов, посчитать их количество и отсортировать по звездам от большего к меньшему

// function summ(a){

// }
// console.log(summ(users))

// ДЗ
// 1 // Найти причину ошибки программы.
//Найти произведение элементов массива, на четных позициях (с индексами 0, 2, 4, ...)
//Результат работы программы: -32598720

// const arr = [2, 4, 7, 9, 5, 3, 12, 41, -14, -25, 36, 12, -7, 5, -11, -12];
// let rezult = 1;
// let poz = 0;
// for (const elem of arr) {
//   if (poz % 2 === 0) {
//     rezult *= elem;
//   }
//   poz++;
// }
// console.log(rezult);

// 2
//Найти позицию последней гласной буквы в строке.
//Правильный ответ: 72
// const etalon = "аеиоуыэюя";
// const str =
//   "рывр пр пвропф вфлп арфвп арпфнк рсмярп рмояпав ромвава пва рпяавло рпляопрзшцг";

// function findLastLetter(str, eStr) {
//   const letterIndex = str.split('').findLastIndex((item) => eStr.includes(item));
//   return letterIndex;
// }
// console.log(findLastLetter(str, etalon));

// 3

// Найти общую сумму всех продаж (сумму всех элементов массивов обекта).
// Верный ответ: 788

// const dataArr = {
//   type: "User data",
//   isNewData: true,
//   newPrice: [125, 125, 145, 35, 45, 74, 36, 14],
//   oldData: {
//     type: "Old User Data",
//     isNewData: false,
//     price: [14, 2, 45, 41, 23, 11, 20, 11, 5, 6, 7, 4]
//   }
// };

// function sumAllPrices(obj) {
//   let sumOldPrice = obj.oldData.price.reduce((acc, item) => acc + item, 0);
//   let sumNewPrice = obj.newPrice.reduce((acc, item) => acc + item, 0);
//   return sumOldPrice + sumNewPrice;
// }

// console.log(sumAllPrices(dataArr));
