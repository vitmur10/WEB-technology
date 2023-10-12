// Зчитуємо довжину першого катета з вводу
let a = parseFloat(prompt("Введіть довжину першого катета:"));

// Зчитуємо довжину другого катета з вводу
let b = parseFloat(prompt("Введіть довжину другого катета:"));

// Обчислюємо гіпотенузу за теоремою Піфагора
let hypotenuse = Math.sqrt(a * a + b * b);

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Гіпотенуза за катетами ${a} і ${b} дорівнює ${hypotenuse}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
