class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();
    this.registerEvents();

    this.startTimerID = 0; // Для хранения ID setTimeout, чтобы сбрасывать.
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;    
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
    document.addEventListener('keyup', (e) => {
      const key = (e.key).toString().toLowerCase();    
      this.currentSymbol.textContent === key ? this.success() : this.fail();      
    });
    
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
      
    this.startTimer(); //Запуск таймера для данного слова
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  /*
      Запускается когда меняется слово.
      Устанавливает setTimeout, если таймаут прошел значит поражение.
      Устанавливает setInterval, пользователь видит скольок есть времени на ввод слова. 
  */
  startTimer() {
    clearTimeout(this.startTimerID);
    const lengthWord = document.querySelectorAll('.symbol').length
    console.log('запуск startTimer()');
    this.startTimerID = setTimeout(() => {     
      this.fail();      
    }, lengthWord * 1000);

    clearTimeout(this.startIntervalID);
    const timer = document.querySelector('.timer');
    timer.textContent = lengthWord;
    this.startIntervalID = setInterval((timer) => {      
      timer.textContent = (timer.textContent - 0.1).toFixed(1);
    }, 100, timer);    
  }

}

new Game(document.getElementById('game'))

