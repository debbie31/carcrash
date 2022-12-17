const carEnemy = document.getElementById('carEnemy');
const myCar = document.getElementById('myCar');
const result = document.getElementById('result');
const score = document.getElementById('score');
const currentScore = document.getElementById('currentScore');
const road = document.getElementById('road');
const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const restartBtn = document.getElementById('restartBtn');
const exit1 = document.getElementById('exitBtn1');
const exit2 = document.getElementById('exitBtn2');
let counter = 0;

exit1.addEventListener('click', function () {
  road.style.display = 'none';
  startScreen.style.display = 'block';
});

exit2.addEventListener('click', function () {
  road.style.display = 'none';
  startScreen.style.display = 'block';
  result.style.display = 'none';
});

startBtn.addEventListener('click', function () {
  road.style.display = 'block';
  startScreen.style.display = 'none';
});

restartBtn.addEventListener('click', function () {
  road.style.display = 'block';
  result.style.display = 'none';
  counter = 0;
  myCar.style.left = 100 + 'px';
});

carEnemy.addEventListener('animationstart', function () {
  carEnemy.style.left = Math.floor(Math.random() * 3) * 100 + 'px';
});

carEnemy.addEventListener('animationiteration', function () {
  carEnemy.style.left = Math.floor(Math.random() * 3) * 100 + 'px';
  counter++;
  currentScore.innerText = `Score: ${counter}`;
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  }
  if (event.key === 'ArrowRight') {
    moveRight();
  }
});

function randomizer() {
  return Math.floor(Math.random() * 3) * 100;
}

function moveLeft() {
  let left = parseInt(window.getComputedStyle(myCar).getPropertyValue('left'));
  left -= 100;
  if (left >= 0) {
    myCar.style.left = left + 'px';
  }
}

function moveRight() {
  let left = parseInt(window.getComputedStyle(myCar).getPropertyValue('left'));
  left += 100;
  if (left < 300) {
    myCar.style.left = left + 'px';
  }
}
function rules() {
  document.getElementById('myDropdown').classList.toggle('show');
}

document.getElementById('myBtn').onclick = function () {
  rules();
};

setInterval(function () {
  const myCarLeft = parseInt(
    window.getComputedStyle(myCar).getPropertyValue('left')
  );
  const carEnemyLeft = parseInt(
    window.getComputedStyle(carEnemy).getPropertyValue('left')
  );
  const carEnemyTop = parseInt(
    window.getComputedStyle(carEnemy).getPropertyValue('top')
  );
  if (myCarLeft == carEnemyLeft && carEnemyTop < 600 && carEnemyTop > 400) {
    result.style.display = 'block';
    score.innerHTML = `Your score is ${counter}`;
    road.style.display = 'none';
  }
}, 1);
