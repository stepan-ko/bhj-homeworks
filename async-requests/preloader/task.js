
const isLocalValute = window.localStorage.getItem('Valute');
if (isLocalValute) {
  setItem(JSON.parse(isLocalValute));
}

function setItem(object) {
  const items = document.querySelector('#items');
  const obj = object;
  let htmlCode = '';
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      htmlCode += `<div class="item">    
                    <div class="item__code">
                        ${element.CharCode}
                    </div>
                    <div class="item__value">
                        ${element.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`;
    }
  }
  items.innerHTML = htmlCode;
  const loader = document.querySelector('.loader_active');
  loader ? loader.classList.remove('loader_active') : console.log('данные обновлены');
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const ansver = JSON.parse(xhr.responseText);
    const valute = ansver.response.Valute;
    setItem(valute);
    window.localStorage.setItem('Valute', JSON.stringify(valute));
  }
});
xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

