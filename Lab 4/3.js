// Зчитуємо дату народження (у форматі рік-місяць-день)
let birthDate = new Date("1995-07-15");

// Масив з датами початку знаків зодіаку (день народження береться до уваги)
let zodiacDates = [
    new Date("2000-01-20"), new Date("2000-02-19"),
    new Date("2000-03-21"), new Date("2000-04-20"),
    new Date("2000-05-21"), new Date("2000-06-21"),
    new Date("2000-07-23"), new Date("2000-08-23"),
    new Date("2000-09-23"), new Date("2000-10-23"),
    new Date("2000-11-22"), new Date("2000-12-22")
];

// Масив з назвами знаків зодіаку
let zodiacSigns = [
    "Козеріг", "Водолій", "Риби",
    "Овен", "Телець", "Близнюки",
    "Рак", "Лев", "Діва",
    "Терези", "Скорпіон", "Стрілець"
];

// Визначаємо знак зодіаку
let zodiacIndex = zodiacDates.findIndex(date => birthDate < date);
if (zodiacIndex === -1) {
    zodiacIndex = 0; // Якщо не знайдено, то останній знак
}

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Дата народження: ${birthDate.toDateString()}, Знак зодіаку: ${zodiacSigns[zodiacIndex]}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
