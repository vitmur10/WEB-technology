// Задане число
let number = 12345;

// Перетворення числа на рядок та підрахунок довжини рядка
let digitCount = number.toString().length;

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Кількість цифр у числі ${number}: ${digitCount}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
