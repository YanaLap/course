// 0.
// alert("hay")
// console.log('Hay')

// 1.
// let number = +prompt('Введіть число')
// alert('Дане число у квадраті ='+ ' ' + (number**2))

// 2.
// let firstNumber = +prompt('Введіть перше число')
// let secondТumber = +prompt('Введіть друге число')
// alert('Середнє арефметичне між цими числами =' + ' ' + ((firstNumber + secondТumber) / 2))

// 3.
// let length = +prompt('Вкажіть довжину сторони (см)')
// alert('Плаща квадрату =' + ' ' + (length**2) + ' ' + 'см2')

// 4.
// let kilometer = +prompt('Вкажіть км для конвертер в м');
// const miles = 0.621371
// alert('Введений кілометраж дорівнює'+ ' ' + (kilometer * miles) +  ' ' + 'миль' )

// 5.
// let firstNumber = +prompt('Введіть перше число а')
// let secondТumber = +prompt('Введіть друге число b')
// let plus = (firstNumber + secondТumber)
// let minus = (firstNumber - secondТumber)
// let divided = (firstNumber / secondТumber)
// let multiplication = (firstNumber * secondТumber)

// alert('a+b =' + ' ' + (plus) + ',' + ' ' + 'a-b =' + ' ' + (minus) + ',' + ' ' + 'a*b =' + ' ' + (multiplication) + ',' + ' ' + 'a/b =' + ' ' + (divided))

// alert(plus)
// alert(minus)
// alert(divided)
// alert(multiplication)


// 6.
// let valueA = +prompt('Введіть значення "а" для формули a*x+b=0 ')
// let valueB = +prompt('Введіть значення "b" для формули a*x+b=0 ')
// alert('x=' + ' ' + (-valueB / valueA))

// 7.?????
// let hours = +prompt('Ввведіть скільки зараз годин')
// let minutes = +prompt('Введіть скільки зараз хвилин')
// const hoursDay = 24
// const minutesInAnHour = 60

// alert("Залишилось" + " " + (hoursDay - hours) + " " + "год та" + " " + (minutesInAnHour - minutes) + " " + "хв")



// // 8.
// let a = +prompt ('Введіть 1 значення трьохзначного числа')
// let b = +prompt ('Введіть 2 значення трьохзначного числа')
// let c = +prompt ('Введіть 3 значення трьохзначного числа')
// alert(b)

// 8.1??
// let a = +prompt('Введіть трьохзначне число')
// alert('Друга цифра введеного числа =' + ' ' + (Math.floor((a / 10) % 10)))

// 9.
// let a = +prompt('Введіть 5-значне число')
// alert(Math.floor(a % 10) + "" + Math.floor(a / 10000) % 10 + "" + Math.floor(a / 1000) % 10 + "" + Math.floor(a / 100) % 10 + "" + Math.floor(a / 10) % 10)



// let result = Math.floor(a  % 10)
// let result = Math.floor(a/10000)  % 10
// let result = Math.floor(a/1000)  % 10
// let result = Math.floor(a/100)  % 10
// let result = Math.floor(a/10)  % 10

// 10.
// const wageRate = 5250
// let salesAmount = +prompt ('Введіть загальну сумму продаж за місяць у $')
// alert ('Зарплата співробітника за місяць становить' + ' ' + (((salesAmount / 100) *10) + wageRate) + ' ' + '$')




// Урок2

// 1.
// let number = +prompt ('Введите свое число')
// if(number>0){
//    alert ('Положительное число')
// } else if(number===0){
//    alert ('Число 0')
// } else {
//    alert ('отрицательное')
// }

// 2.
// let year = +prompt('Введіть свій вік для вибору контенту')
// if (year <= 3 && year < 120) {
//    alert('Дані введені не корректно');

// } else if (year > 3 && year < 12) {
//    alert('Дитячий контект');
// } else if (year >= 12 && year < 18) {
//    alert('Ви обрали контент для підлітків');
// } else {
//    alert('Ви обрали контент 18+')
// }

// Урок3
//1

// let number=+prompt('Ввведыть число, щоб отримати його по модулю');
// alert(Math.abs(number))

//2

// let minutes = +prompt('Введіть хвилини');
// let seconds = +prompt('Введіть секунди');
// let watch = +prompt('Введіть години');

// if (!Number.isNaN(minutes) && !Number.isNaN(seconds) && !Number.isNaN(watch)){
// alert("дані введені корректно")

// }else{
//    alert("дані введені не корректно")
// }

//3
// let numberX = +prompt('Введіть коордити по х');
// let numberY = +prompt('Введіть коордити по у');

// if (numberX > 0 && numberY > 0) {
//    alert('Точка буде знаходитися на осі |')
// }

// else if (numberX < 0 && numberY > 0) {
//    alert('Точка буде знаходитися на осі ||')
// }
// else if (numberX < 0 && numberY < 0) {
//    alert('Точка буде знаходитися на осі |||')
// }

// else if (numberX > 0 && numberY < 0) {
//    alert('Точка буде знаходитися на осі |V')
// }

// else if (numberX === 0 && numberY > 0 || numberX === 0 && numberY < 0) {
//    alert('Точка буде знаходитися на осі Y')
// }

// else if (numberY === 0 && numberX > 0 || numberY === 0 && numberX < 0) {
//    alert('Точка буде знаходитися на осі X')
// }

// else if (numberX === 0 && numberY === 0) {
//    alert('Точка буде знаходитися на початку координат ')
// }
// else {
//    alert('Дані введені не коректно')
// }

//4
// let numberMonth = +prompt('Введіть число місяця');
// switch (numberMonth) {
//    case 1:
//       alert('Сiчень');
//       break;
//    case 2:
//       alert('Лютий');
//       break;
//    case 3:
//       alert('Березень');
//       break;
//    case 4:
//       alert('Квітень');
//       break;
//    case 5:
//       alert('Травень');
//       break;
//    case 6:
//       alert('Червень');
//       break;
//    case 7:
//       alert('Липень');
//       break;
//    case 8:
//       alert('Серпень');
//       break;
//    case 9:
//       alert('Вересень');
//       break;
//    case 10:
//       alert('Жовтень');
//       break;
//    case 11:
//       alert('Листопад');
//       break;
//    case 12:
//       alert('Грудень');
//       break;
//    default: alert('Некоректні дані');

// }

// 5

// let numberA = +prompt('Введіть перше число ');
// let numberB = +prompt('Введіть друге число ');
// let sign = prompt('Введіть знак + - / *');
// switch (sign) {
//    case '+':
//       alert(numberA + numberB);
//       break;

//    case '-':
//       alert(numberA - numberB);
//       break;

//    case '*':
//       alert(numberA * numberB);
//       break;

//    case '/':
//       alert(numberA / numberB);
//       break;

//    default:
//       alert("Нет таких значений");
// }


// Урок 4
// 1

// let numberA = +prompt("Введіть число А");
// let numberB = +prompt("Введіть число B");
// numberA > numberB ? alert(`Ваше число ${numberA}`) : alert(`Ваше число ${numberB} `)

// 2
// let numberA = +prompt("Введіть число А");
// numberA % 5 === 0 ? alert(`Ваше число кратне 5`) : alert(`Ваше число НЕ кратне 5 `);

// 3
// let numberA = prompt("Введіть назву планети");
// numberA === 'Земля' || numberA === 'земля' ? alert(`Привет, землянин!`) : alert(`Привет, инопланетянин!`)

// 4
// let a = 5;
// let b = 10;
// function getNumber(num1, num2) {
//    if (num1 < num2) {
//       return num1;
//    }
//    return num2;
// }
// console.log(getNumber(a, b))

// 2

// let a = 5;

// function getNumber(number) {
//    const numberSquared = number ** 2;
//    console.log(numberSquared)
//    // return numberSquared;
// }
// getNumber(a)

// 3

// let a = 10;
// let b = 5;
// let c = '+';

// function getNumber(numberA, numberB, numberC) {
//    const calc = numberA numberC;
// }

// Урок5

// 1
// let number = 5
// for (let i = 1; i <= 100 ; i++) {
//       console.log(i)

// }

// 2
// let number = 5
// for (let i = 1; i <= 100 ; i++) {

//    if(i%number==0){
//       console.log(i)
//        }
// }

// 3

// let max = 100
// let min = 1
// for (i=min+3 ;i<=max; i+=4){
//   console.log(i)
// }

// 4.
// let min = 1
// let max = 10
// let result=0;
// for (i=min+3 ;i<=max; i+=4){
//    console.log(`Вивод числа ${i}`)
//    result++
// }
// console.log(`Число строк ${result}`)

// 5

// function table (a){
// for (let i=1; i<=9; i++)
// console.log (`${a} x ${i} = ${a*i}`)
// }
// table(5)

// 6
// function table(a) {

//    for (let j = 2; j <= 9; j++) {
//       for (let i = 1; i <= 9; i++) {
//          console.log(`${j} x ${i} = ${j * i}`)
//       }
//       console.log('-----------------')
//    }

// }
// table()

// АБО??

// function table(a) {

//       for (let i = 1; i <= 9; i++) {
//          console.log(`${a} x ${i} = ${a * i}`)
//       }

//    }
//    for (let j = 2; j <= 9; j++) {
//       table(j)
//       console.log("__________")
//    }


// 7
// function getSum(numberA, numberB, numberC, numberD, numberE){
// return(numberA+numberB+numberC+numberD+numberE)
// }
// console.log(getSum(1,2,3,4,5))


// Урок6

function sum(number1, number2, number3) {
   if (number3 || number3 === 0) {
      return number3
   } else if (number2 || number2 === 0) {
      return number1 + number2
   } return number1
}