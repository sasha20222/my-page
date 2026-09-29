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