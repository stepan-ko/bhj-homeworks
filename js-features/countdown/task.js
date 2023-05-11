const timer = document.getElementById('timer');

function toTimeText(number) {
  return number < 10 ? '0' + number : number;
}

function startTimer() {     
  let hour = Number(timer.textContent.split(':')[0]);
  let minut = Number(timer.textContent.split(':')[1]);
  let second = Number(timer.textContent.split(':')[2]);

  if(second === 0) {
    if(minut === 0) {
      if(hour === 0) {
        clearInterval(startTimerID);
        alert('Вы победили в конкурсе!');
        return;
      } 
      hour--;
      minut = 59;
      second = 59;
    } else {
      minut--;
      second = 59;
    }  
  } else {
    second--;
  }

  timer.textContent = toTimeText(hour) + ':' + toTimeText(minut) + ':' + toTimeText(second);
}

const startTimerID = setInterval(startTimer, 1000);



