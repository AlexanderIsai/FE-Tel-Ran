// Напишите функцию, которая получает массив чисел и возвращает среднее ариф. значение

function getAverageValue(array) {
    let initialValue = 0;
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    console.log("Среднее арифметическое массива случайных чисел")
    return sumWithInitial / array.length

}

// function getAverageValue(array){
//     let result = 0;
//     for (let i = 0; i < array.length; i++){
//         result = result + array[i];
//     }
//     return result / array.length;
// }

function createArray(length) {
    let testArray = [];
    for (let i = 0; i < length; i++) {
        testArray.push(+(Math.random() * 10).toFixed(0))
        // testArray[i] = +(Math.random()*10).toFixed(0)
    }
    console.log("Массив случайных чисел")
    console.log(testArray)
    return testArray;
}

alert("Задача 4. Вычисление среднего арифметического всех элементов массива случайных чисел")
console.log("Задача 4. Среднее арифметическое массива случайных чисел")
let length = +prompt("Input length of array")

console.log(getAverageValue(createArray(length)).toFixed(2))
