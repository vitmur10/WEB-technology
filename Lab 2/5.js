// Зчитуємо число з вводу
let num = parseInt(prompt("Введіть число:"));

// Ініціалізуємо змінну для збереження факторіалу
let factorial = 1;

// Використовуємо цикл for для обчислення факторіалу
for (let i = 1; i <= num; i++) {
    factorial *= i;
}

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Факторіал числа ${num} дорівнює ${factorial}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);

// Повторно ініціалізуємо змінну для обчислення факторіалу
factorial = 1;

// Використовуємо цикл while для обчислення факторіалу
let i = 1;
while (i <= num) {
    factorial *= i;
    i++;
}

// Створюємо інший елемент для відображення результату від цикла while
let resultElement2 = document.createElement("p");
resultElement2.textContent = `Факторіал числа ${num} дорівнює ${factorial}`;

// Додаємо другий елемент до body
document.body.appendChild(resultElement2);
