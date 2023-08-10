// Зчитуємо радіус внутрішнього кола з вводу
let innerRadius = parseFloat(prompt("Введіть радіус внутрішнього кола:"));

// Зчитуємо радіус зовнішнього кола з вводу
let outerRadius = parseFloat(prompt("Введіть радіус зовнішнього кола:"));

// Обчислюємо площу кільця
const pi = Math.PI;
let area = pi * (outerRadius * outerRadius - innerRadius * innerRadius);

// Виводимо обчислену площу кільця
console.log(`Площа кільця з радіусами ${innerRadius} (внутрішній) і ${outerRadius} (зовнішній) дорівнює ${area}`);
