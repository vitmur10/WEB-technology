// Задане ціле число K
let K = 7;

// Визначення закінчення слова "двійка"
let ending = "ок";
if (K % 10 === 1 && K !== 11) {
    ending = "ка";
}

console.log(`На парі викладач поставив студентам ${K} двій${ending}`);