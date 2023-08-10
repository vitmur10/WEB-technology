//Знайдення максимального елемента в масиві:

let array = [3, -2, 0, 5, -1, 8, -4, 7, 2];
let maxElement = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}

console.log(`Максимальний елемент в масиві: ${maxElement}`);
//Підрахунок від'ємних елементів масиву:

let array = [3, -2, 0, 5, -1, 8, -4, 7, 2];
let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }
}

console.log(`Кількість від'ємних елементів в масиві: ${negativeCount}`);
//Підрахунок кількості слів у тексті:

let text = "Слова в заданому тексті розділяються пробілами";
let words = text.split(" ");
let wordCount = words.length;

console.log(`Кількість слів у тексті: ${wordCount}`);
//Заміна слів А на слово В:

let text = "Це А простий текст А для прикладу";
let replacedText = text.replace(/А/g, "В");

console.log(`Замінений текст: ${replacedText}`);
//Стиснення тексту (заміна послідовних пробілів на один):

let text = "Це  текст з  багато    пробілами.";
let compressedText = text.replace(/\s+/g, " ");

console.log(`Стиснутий текст: ${compressedText}`);