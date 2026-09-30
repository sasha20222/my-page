// 1. Початкові змінні в памʼяті компʼютера:
let score = 0;
let clickPower = 1;    // сила одного кліку (+1, +2, +4, +8...)
let upgradePrice = 50; // ціна наступної прокачки (50, 100, 200...)

// 2. Команда тапу по картинці:
function tap() {
  score = score + clickPower; // додаємо поточну силу кліку
  document.getElementById('score').innerText = score;
  document.getElementById('text').play();
}

// 3. Команда купівлі в магазині прокачки:
function buyUpgrade() {
  if (score >= upgradePrice) {
    // Очок вистачає!
    score = score - upgradePrice;       // забираємо поточну ціну
    clickPower = clickPower * 2;       // подвоюємо силу кліку!
    upgradePrice = upgradePrice * 2;   // піднімаємо ціну для наступного разу!

    // Оновлюємо і рахунок, і нову ціну прямо на кнопці:
    document.getElementById('score').innerText = score;
    document.getElementById('price').innerText = upgradePrice;

    alert('Успішно! Тепер сила кліку: +' + clickPower + '! Наступна ціна: ' + upgradePrice + ' 🪙');
  } else {
    // Очок замало:
    alert('Недостатньо очок! Тобі треба назбирати ' + upgradePrice + ' 🪙');
  }
}

// 4. Твоя команда для скидання рахунку та прокачки:
function reset() {
  score = 0;
  clickPower = 1;
  upgradePrice = 50;
  document.getElementById('score').innerText = score;
  document.getElementById('price').innerText = upgradePrice;
}