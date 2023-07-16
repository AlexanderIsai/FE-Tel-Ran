// Напишите функцию, которая выводит все числа от 1 до 100. Для чисел, которые кратны 3,
// вместо числа выведите "Fizz", а для чисел, кратных 5, выведите "Buzz". Если число кратно и 3, и 5,
// выведите "FizzBuzz".
    function outputNumbersWithConditions (){
    let mult3 = "Fizz";
    let mult5 = "Buzz";

    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
        // if(i % 15 === 0){
            console.log(mult3 + mult5)
        } else if (i % 3 === 0){
            console.log(mult3)
        } else if (i % 5 === 0){
            console.log(mult5)
        } else console.log(i)
    }
}

console.log("Задача 1")
outputNumbersWithConditions();

// Создайте объект, представляющий книгу. Каждая книга должна иметь свойства
// "название", "автор" и "год издания". Выведите информацию о книге в консоль.

let bookItem = {
    name: "Game of Thrones",
    author: "George Raymond Richard Martin",
    year: 1996
}
console.log("Задача 2")
console.log(bookItem)

// Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.

function sumNumbers(maxNumber){
    let result = 0;
    for (let i = 1; i <= maxNumber; i++){
        result += i;
    }
    console.log(result)
}
console.log("Задача 3")
sumNumbers(100)

// Создайте объект, представляющий человека. У человека должны быть свойства "имя", "возраст"
// и "пол". Выведите информацию о человеке в консоль.

let human = {
    name: "Alex",
    age: 40,
    sex: "male"
}
console.log("Задача 4")
console.log(human)

// Напишите функцию, которая находит наибольшее число в заданном массиве чисел.
let randomArray = createRandomArray();

function createRandomArray(){
    let lengthArray = +prompt("Введите длину массива случайных чисел");
    let minNumber = +prompt("Введите минимальное число массива случайных чисел");
    let maxNumber = +prompt("Введите максимальное число массива случайных чисел");
    let randomArray = [];
    for (let i = 0; i < lengthArray; i++) {
        randomArray.push(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber))
    }
    // console.log("Массив случайных чисел")
    // console.log(randomArray)
    return randomArray;
}

function findMaxNumber(array){
    console.log("Массив случайных чисел")
    console.log(array)
    console.log("Максимальное число массива случайных чисел")
    console.log(array.sort((a, b) => a - b)[array.length - 1])
}
console.log("Задача 5")
findMaxNumber(randomArray)

// Создайте массив объектов, представляющих различных студентов. Каждый объект должен иметь свойства
// "имя", "возраст" и "оценка". Выведите информацию о каждом студенте в консоль.

let students = [
    {
        name: "Alex",
        age: 40,
        note: 12
    },
    {
        name: "Andrei",
        age: 30,
        note: 11
    },
    {
        name: "Alina",
        age: 32,
        note: 8
    },
    {
        name: "Oleg",
        age: 45,
        note: 5
    },
]
console.log("Задача 6")
console.log(students)
function outputStudentsInfo(students){
    for (let student of students) {
        console.log(student)
    }
}
outputStudentsInfo(students)

// Напишите функцию, которая находит среднее значение всех чисел в заданном массиве.

function getAverageValue(array) {
    let initialValue = 0;
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    console.log("Среднее арифметическое отсортированного массива случайных чисел")
    console.log(array)
    console.log(sumWithInitial / array.length)
}
console.log("Задача 7")
getAverageValue(randomArray)
