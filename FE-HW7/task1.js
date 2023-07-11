// Напишите функцию, которая выводит нечетные числа от 0 до 10

// function outputOddNumbers(){
//     for(let i = 0; i < 11; i++){
//         if (i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }

alert('Домашняя работа 7. Результаты будут в консоли. Нажмите "ОК" для продолжения')

function outputOddNumbers() {
    for (let i = 1; i < 11; i += 2) {
        console.log(i)
    }
}

console.log("Задача 1. Нечетные числа от 1 до 10")
outputOddNumbers();
