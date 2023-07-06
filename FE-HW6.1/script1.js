alert('Задача 1. Нажмите "ок" для продолжения')
let productCost = +prompt("Расчет скидок и наценок. Введите стоимость товара");
let bodyElem = document.querySelector('body');

bodyElem.classList.add('basis');

let answer1 = document.querySelector('.task1');

answer1.innerHTML = `
Стоимость товара со скидкой 10% - ${(productCost * 0.9).toFixed(2)}
Стоимость товара с наценкой 10% - ${(productCost * 1.1).toFixed(2)}
Стоимость товара со скидкой 25% - ${(productCost * 0.75).toFixed(2)}
Стоимость товара с наценкой 25% - ${(productCost * 1.25).toFixed(2)}
Стоимость товара со скидкой 1% - ${(productCost * 0.99).toFixed(2)}
Стоимость товара с наценкой 1,5% - ${(productCost * 1.015).toFixed(2)}
`;

setTimeout(function () {
    alert('Спасибо за участие переходим к задаче 2. Нажмите "ок" для продолжения');
    let productCost2 = +prompt("Узнаем, положена ли Вам скидка. Введите стоимость товара");
    let answer2 = document.querySelector(".task2");
    let h21 = document.querySelector('.h21');
    h21.classList.remove('h21')
    if (productCost2 >= 100) {
        answer2.textContent = `Т.к. стоимость товара больше или равна 100, мы сделали Вам скидку. Окончательная цена - ${(productCost2 * 0.95).toFixed(2)}`
    } else answer2.textContent = `Стоимость товара - ${productCost2}`;
}, 500)

setTimeout(function () {
    alert('Спасибо за участие переходим к задаче 3. Нажмите "ок" для продолжения');
    let num = +prompt("Сравнение с 0. Введите число");
    let answer3 = document.querySelector(".task3");
    let h22 = document.querySelector('.h22');
    h22.classList.remove('h22')
    if (num < 0) {
        answer3.textContent = `Ваше число ${num} меньше 0`
    } else if (num > 0) {
        answer3.textContent = `Ваше число ${num} больше 0`
    } else answer3.textContent = `Ваше число ${num} и есть 0`
}, 500)

setTimeout(function () {
    alert('Задача 3 завершена. Результаты в консоли. Нажмите "ок" для перехода к задаче 4');
    let num2 = +prompt("Определение последней цифры числа. Введите число");
    let answer4 = document.querySelector(".task4");
    let h23 = document.querySelector('.h23');
    h23.classList.remove('h23')
    answer4.textContent = `Последняя цифра вашего числа = ${num2 % 10}`;
}, 500)

setTimeout(function () {
    alert("Спасибо за участие. Домашняя работа завершена.")
}, 600)




