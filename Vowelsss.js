function countVowels(str) {
    const vowelsRegex = /[aeiou]/gi;
    const vowelsArray = str.match(vowelsRegex);
    if (vowelsArray === null) {
        return 0;
    }
    return vowelsArray.length;
}

function calculateVowels() {
    const inputElement = document.getElementById('inputString'); // Отримуємо доступ до HTML елемента введення
    const inputString = inputElement.value; // Отримуємо значення, яке ввів користувач

    const vowelsCount = countVowels(inputString); // Викликаємо функцію для підрахунку голосних
    console.log("Кількість голосних літер у рядку:", vowelsCount);}