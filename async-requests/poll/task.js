
  // формирования запроса в HTML документе
function setQuestion(id, title, answers) {
  const pollTitle = document.querySelector('#poll__title');
  const pollAnswers = document.querySelector('#poll__answers');
  pollTitle.textContent = title;
  for (let i = 0; i < answers.length; i++) {
    pollAnswers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer" onclick="checkAnswer(${id}, ${i});">
                ${answers[i]}
            </button>
        `);
  }
}

function checkAnswer(id, index) {
  alert(`Спасибо, ваш голос засчитан! `);
  // запрос на статистику с ответами
  const xhr = new XMLHttpRequest;
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const rezult = JSON.parse(xhr.responseText);
      let htmlText = '';
      rezult.stat.forEach(item => {
        htmlText += '<div><b>' + item.answer + ': ' + item.votes + '</b></div>';
      });
      document.querySelector('#poll__answers').innerHTML = htmlText;
    }
  });
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${id}&answer=${index}`);
}

// запрос на вопрос с вариантами ответов
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const rezult = JSON.parse(xhr.responseText);
    setQuestion(rezult.id, rezult.data.title, rezult.data.answers)
  }
});
xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

