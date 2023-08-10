//Визначення назви року за давньояпонським календарем:
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

console.log(`Дата: ${inputDate.toDateString()}, Назва року за давньояпонським календарем: ${subCycleColors[subCycleIndex]} ${subCycleAnimals[animalIndex]}`);
