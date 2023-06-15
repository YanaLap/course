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
