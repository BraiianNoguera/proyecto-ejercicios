const trackingForm = document.getElementById('tracking-form');
const exerciseInput = document.getElementById('exercise-input');
const repsInput = document.getElementById('reps-input');
const setsInput = document.getElementById('sets-input');
const trackingList = document.getElementById('tracking-list');

trackingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const exercise = exerciseInput.value;
  const reps = repsInput.value;
  const sets = setsInput.value;

  if (exercise && reps && sets) {
    addTrackingEntry(exercise, reps, sets);
    clearInputs();
  }
});

function addTrackingEntry(exercise, reps, sets) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${exercise}:</strong> ${reps} repeticiones x ${sets} series 
                  <button class="delete-button">Borrar</button>`;
  trackingList.appendChild(li);
  
  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    trackingList.removeChild(li);
  });
}

function clearInputs() {
  exerciseInput.value = '';
  repsInput.value = '';
  setsInput.value = '';
}

// preg edad

const ageCards = document.querySelectorAll('.age-card');

ageCards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedAge = card.getAttribute('data-age');
    // Aquí puedes redirigir al usuario a otra sección o realizar otra acción
    console.log(`Edad seleccionada: ${selectedAge}`);
  });
});

// CRONOMETRO

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

// obj.

const goalSelect = document.getElementById('goal-select');
const continueButton = document.getElementById('continue-button');

continueButton.addEventListener('click', redirectToExercise);

function redirectToExercise() {
  const selectedGoal = goalSelect.value;
  
  if (selectedGoal === 'objetivo1') {
    window.location.href = 'perderpeso.html'; // Redirige a la página de objetivo 1
  } else if (selectedGoal === 'objetivo2') {
    window.location.href = 'ganarmusc.html'; // Redirige a la página de objetivo 2
  } else if (selectedGoal === 'objetivo3'){
    window.location.href = 'definicion.html'; // Redirige a la página de objetivo 4
  }
  else {
    alert('Selecciona un objetivo válido.');
  }
}

// registrar peso
function addWeight() {
  const weightInput = document.getElementById("weight-input");
  const weight = parseFloat(weightInput.value);

  if (!isNaN(weight)) {
    const weightList = document.getElementById("weight-list");
    const listItem = document.createElement("li");
    const currentDate = new Date().toLocaleDateString();

    listItem.textContent = `${currentDate}: ${weight} kg`;
    weightList.appendChild(listItem);

    weightInput.value = "";
  }
}