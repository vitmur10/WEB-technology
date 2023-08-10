// Зчитуємо число з вводу
let num = parseInt(prompt("Введіть число:"));

// Ініціалізуємо змінну для збереження факторіалу
let factorial = 1;

// Використовуємо цикл for для обчислення факторіалу
for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`Факторіал числа ${num} дорівнює ${factorial}`);


// Використовуємо цикл while для обчислення факторіалу
let i = 1;
while (i <= num) {
    factorial *= i;
    i++;
}

console.log(`Факторіал числа ${num} дорівнює ${factorial}`);
