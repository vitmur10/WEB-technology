// Зчитуємо натуральне число з вводу
let number = parseInt(prompt("Введіть натуральне число:"));

// Створюємо елемент для відображення дільників у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Дільники числа ${number}:`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);

// Знаходимо всі дільники числа і відображаємо їх у браузері
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        // Створюємо елемент для відображення дільника
        let divisorElement = document.createElement("p");
        divisorElement.textContent = i;

        // Додаємо елемент до body (або іншого відповідного контейнера)
        document.body.appendChild(divisorElement);
    }
}

