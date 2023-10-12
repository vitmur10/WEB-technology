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

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Максимальне число: ${maxNumber}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
