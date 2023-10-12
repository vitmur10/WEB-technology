// Зчитуємо задану дату (у форматі рік-місяць-день)
let inputDate = new Date("1984-08-15");

// Масив з назвами підциклів
let subCycleColors = ["зелений", "червоний", "жовтий", "білий", "чорний"];
let subCycleAnimals = [
    "пацюка", "корови", "тигра", "зайця", "дракона", "змії",
    "коня", "вівці", "мавпи", "курки", "собаки", "свині"
];

// Визначаємо назву року
let year = inputDate.getFullYear();
let cycleYear = (year - 4) % 60;
let subCycleIndex = Math.floor(cycleYear / 12);
let animalIndex = cycleYear % 12;

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Дата: ${inputDate.toDateString()}, Назва року за давньояпонським календарем: ${subCycleColors[subCycleIndex]} ${subCycleAnimals[animalIndex]}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
