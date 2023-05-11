
const countClick = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('clicker__speed');
let timeClick;

cookie.onclick = () => {
  countClick.textContent++;
  cookie.width = cookie.width === 200 ? 180 : 200;  
  const speedFormated = (1 / ((Date.now() - timeClick) / 1000)).toFixed(2);
  timeClick ? speed.textContent = speedFormated : null;
  timeClick = Date.now();
}