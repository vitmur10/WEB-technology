// Ініціалізуємо змінну для підрахунку кількості щасливих квитків
let luckyTicketCount = 0;

// Перебираємо всі можливі шестизначні номери квитків
for (let ticketNumber = 100000; ticketNumber <= 999999; ticketNumber++) {
    // Розбиваємо номер квитка на цифри
    let digits = ticketNumber.toString().split("").map(Number);

    // Обчислюємо суми перших трьох і останніх трьох цифр
    let firstHalfSum = digits[0] + digits[1] + digits[2];
    let secondHalfSum = digits[3] + digits[4] + digits[5];

    // Перевіряємо, чи є квиток "щасливим"
    if (firstHalfSum === secondHalfSum) {
        luckyTicketCount++;
    }
}

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `Кількість щасливих квитків: ${luckyTicketCount}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
