//Визначення номера тижня в році за заданою датою:
// Зчитуємо задану дату (у форматі рік-місяць-день)
let inputDate = new Date("2023-08-15");

// Визначаємо номер тижня в році
let year = inputDate.getFullYear();
let startOfYear = new Date(year, 0, 1);
let daysPassed = (inputDate - startOfYear) / (24 * 60 * 60 * 1000);
let weekNumber = Math.ceil((daysPassed + startOfYear.getDay() + 1) / 7);

console.log(`Дата: ${inputDate.toDateString()}, Номер тижня: ${weekNumber}`);
