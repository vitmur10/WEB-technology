// Зчитуємо координати точки з вводу
let x = parseFloat(prompt("Введіть координату x точки:"));
let y = parseFloat(prompt("Введіть координату y точки:"));

// Визначаємо чверть
let quadrant;

if (x > 0 && y > 0) {
    quadrant = "перша";
} else if (x < 0 && y > 0) {
    quadrant = "друга";
} else if (x < 0 && y < 0) {
    quadrant = "третя";
} else if (x > 0 && y < 0) {
    quadrant = "четверта";
} else {
    quadrant = "на осях координат";
}

console.log(`Точка з координатами (${x}, ${y}) належить до ${quadrant} чверті.`);
