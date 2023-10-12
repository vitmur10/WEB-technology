// Задане ціле число K
let K = 7;

// Визначення закінчення слова "двійка"
let ending = "ок";
if (K % 10 === 1 && K !== 11) {
    ending = "ка";
}

// Створюємо елемент для відображення результату у браузері
let resultElement = document.createElement("p");
resultElement.textContent = `На парі викладач поставив студентам ${K} двій${ending}`;

// Додаємо елемент до body (або іншого відповідного контейнера)
document.body.appendChild(resultElement);
