// Напишите функцию, которая принимает два числа в качестве диапазона и возвращает сумму чисел в указанном диапазоне

alert('Задача 1 выполнена. Нажмите "ОК" для перехода к задаче 2')

function sumNumbers(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    console.log(result)
}

let start = +prompt("Вычисление суммы чисел заданного диапазона. Enter start value")
let end = +prompt("Enter end value")
console.log(`Задача 2. Сумма всех чисел в диапазоне от ${start} до ${end}`)
sumNumbers(start, end)
