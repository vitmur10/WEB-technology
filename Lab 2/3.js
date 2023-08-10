// Зчитуємо довжини сторін з вводу
let sideA = parseFloat(prompt("Введіть довжину сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C:"));

// Перевіряємо умову існування трикутника: сума будь-яких двох сторін має бути більше третьої сторони
if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    console.log("Можна побудувати трикутник з такими довжинами сторін.");
} else {
    console.log("Не можна побудувати трикутник з такими довжинами сторін.");
}
