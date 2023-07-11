// Напишите функцию, которая конвертирует градусы из шкалы по Цельсию в градусы в шкалу по Фаренгейту

function converterGrad(celsius) {
    return celsius * 1.8 + 32;
}

let celsius = +prompt("Конвертор градусов Цельсия в Фаренгейты. Input celsius value")
console.log(`${celsius} grad in Celsius In Fahrenheit is  ${converterGrad(celsius)}`)