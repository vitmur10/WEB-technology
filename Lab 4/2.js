// Зчитуємо задану дату (у форматі рік-місяць-день)
let inputDate = new Date("2023-08-15");

// Визначаємо номер тижня в році
let year = inputDate.getFullYear();
let startOfYear = new Date(year, 0, 1);
let daysPassed = (inputDate - startOfYear) / (24 * 60 * 60 * 1000);
let weekNumber = Math.ceil((daysPassed + startOfYear.getDay() + 1) / 7);

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Дата: ${inputDate.toDateString()}, Номер тижня: ${weekNumber}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
