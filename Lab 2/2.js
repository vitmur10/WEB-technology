// Оголошуємо масив для збереження введених чисел
let numbers = [];

// Зчитуємо п'ять чисел з вводу
for (let i = 1; i <= 5; i++) {
    let inputNumber = parseFloat(prompt(`Введіть число ${i}:`));
    numbers.push(inputNumber);
}

// Знаходимо максимальне число серед введених
let maxNumber = numbers[0]; // Припускаємо, що перше число найбільше

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; // Оновлюємо максимальне число
    }
}

// Виводимо знайдене максимальне число
console.log(`Максимальне число: ${maxNumber}`);
