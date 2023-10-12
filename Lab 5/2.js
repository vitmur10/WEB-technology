// Координати точок
let x1 = 3;
let y1 = 4;
let x2 = 7;
let y2 = 10;

// Обчислення відстані
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Відстань між точками (${x1}, ${y1}) і (${x2}, ${y2}): ${distance}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
