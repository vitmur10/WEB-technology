// Зчитуємо натуральне число з вводу
let number = parseInt(prompt("Введіть натуральне число:"));

console.log(`Дільники числа ${number}:`);

// Знаходимо всі дільники числа
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
