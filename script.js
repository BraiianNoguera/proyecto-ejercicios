const timeDisplay = document.querySelector('.time-display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

let timer;
let startTime;
let elapsedTime = 0;
let isPaused = false;

function updateTimerDisplay() {
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!timer) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
  }
}

function updateTime() {
  if (!isPaused) {
    elapsedTime = Date.now() - startTime;
    updateTimerDisplay();
  }
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
  startTime = Date.now() - elapsedTime;
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  elapsedTime = 0;
  isPaused = false;
  updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);