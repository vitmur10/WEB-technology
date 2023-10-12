// Зчитуємо радіус з вводу
let radius = parseFloat(prompt("Введіть радіус кола:"));

// Обчислюємо площу кола
const pi = Math.PI;
let area = pi * radius * radius;

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Площа кола з радіусом ${radius} дорівнює ${area}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
