// Зчитуємо натуральне число з вводу
let number = parseInt(prompt("Введіть натуральне число:"));

// Ініціалізуємо змінну для збереження перевернутого числа
let reversedNumber = 0;

// Перевертаємо число
while (number > 0) {
    let lastDigit = number % 10; // Отримуємо останню цифру числа
    reversedNumber = reversedNumber * 10 + lastDigit; // Додаємо останню цифру до перевернутого числа
    number = Math.floor(number / 10); // Видаляємо останню цифру з числа
}

console.log(`Перевернуте число: ${reversedNumber}`);