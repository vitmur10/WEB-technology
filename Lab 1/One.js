// Зчитуємо радіус з вводу
let radius = parseFloat(prompt("Введіть радіус кола:"));

// Обчислюємо площу кола
const pi = Math.PI;
let area = pi * radius * radius;

// Виводимо обчислену площу кола
console.log(`Площа кола з радіусом ${radius} дорівнює ${area}`);
