<!DOCTYPE html>
<html>
<head>
    <title>Результати виконання JavaScript</title>
</head>
<body>
    <h1>Знайдення максимального елемента в масиві:</h1>
    <p id="maxElementResult"></p>

    <h1>Підрахунок від'ємних елементів масиву:</h1>
    <p id="negativeCountResult"></p>

    <h1>Підрахунок кількості слів у тексті:</h1>
    <p id="wordCountResult"></p>

    <h1>Заміна слів А на слово В:</h1>
    <p id="replacedTextResult"></p>

    <h1>Стиснення тексту (заміна послідовних пробілів на один):</h1>
    <p id="compressedTextResult"></p>

    <script>
        // Ваш JavaScript код тут

        // Знайдення максимального елемента в масиві
        let array1 = [3, -2, 0, 5, -1, 8, -4, 7, 2];
        let maxElement = array1[0];

        for (let i = 1; i < array1.length; i++) {
            if (array1[i] > maxElement) {
                maxElement = array1[i];
            }
        }

        document.getElementById("maxElementResult").innerText = `Максимальний елемент в масиві: ${maxElement}`;

        // Підрахунок від'ємних елементів масиву
        let array2 = [3, -2, 0, 5, -1, 8, -4, 7, 2];
        let negativeCount = 0;

        for (let i = 0; i < array2.length; i++) {
            if (array2[i] < 0) {
                negativeCount++;
            }
        }

        document.getElementById("negativeCountResult").innerText = `Кількість від'ємних елементів в масиві: ${negativeCount}`;

        // Підрахунок кількості слів у тексті
        let text = "Слова в заданому тексті розділяються пробілами";
        let words = text.split(" ");
        let wordCount = words.length;

        document.getElementById("wordCountResult").innerText = `Кількість слів у тексті: ${wordCount}`;

        // Заміна слів А на слово В
        let text1 = "Це А простий текст А для прикладу";
        let replacedText = text1.replace(/А/g, "В");

        document.getElementById("replacedTextResult").innerText = `Замінений текст: ${replacedText}`;

        // Стиснення тексту (заміна послідовних пробілів на один)
        let text2 = "Це  текст з  багато    пробілами.";
        let compressedText = text2.replace(/\s+/g, " ");

        document.getElementById("compressedTextResult").innerText = `Стиснутий текст: ${compressedText}`;
    </script>
</body>
</html>
