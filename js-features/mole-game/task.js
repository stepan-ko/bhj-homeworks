
const cells = [];
const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');

function reset(text) {
  alert(text);
  countDead.textContent = 0;
  countLost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  cells[i] = document.getElementById('hole' + i);

  cells[i].onclick = () => {
    cells[i].classList.contains('hole_has-mole') ? countDead.textContent++ : countLost.textContent++;
    countDead.textContent == 10 ? reset('Победа!') : null;
    countLost.textContent == 5 ? reset('Вы проиграли') : null;
  }
}
