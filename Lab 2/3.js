// Зчитуємо довжини сторін з вводу
let sideA = parseFloat(prompt("Введіть довжину сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C:"));

// Перевіряємо умову існування трикутника: сума будь-яких двох сторін має бути більше третьої сторони
if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    // Створюємо елемент для відображення результату у браузері
    let resultElement = document.createElement("p");
    resultElement.textContent = "Можна побудувати трикутник з такими довжинами сторін.";

    // Додаємо елемент до body (або іншого відповідного контейнера)
    document.body.appendChild(resultElement);
} else {
    // Створюємо елемент для відображення результату у браузері
    let resultElement = document.createElement("p");
    resultElement.textContent = "Не можна побудувати трикутник з такими довжинами сторін.";

    // Додаємо елемент до body (або іншого відповідного контейнера)
    document.body.appendChild(resultElement);
}
