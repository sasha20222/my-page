// 1. Записуємо в блокнот початковий рахунок:
let score = 0;

// 2. Наша власна команда для кожного тапу:
function tap() {
  // додаємо +1 очко:
  score = score + 1;
  
  // оновлюємо цифру на табло:
  document.getElementById('score').innerText = score;
  
  // граємо твій звук text.mp3:
  document.getElementById('text').play();
}
// 3. Команда для скидання рахунку:
function reset() {
  score = 0; // обнуляємо змінну в памʼяті
  document.getElementById('score').innerText = score; // оновлюємо табло на екрані
}