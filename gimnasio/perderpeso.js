// Crea un objeto con la información de los días de ejercicios y rutinas
// const exerciseDays = [
//     {
//       day: 'Día 1',
//       exercises: ['Realiza 30-45 minutos de cardio moderado (caminar, nadar, andar en bicicleta) seguido de un circuito de cuerpo completo:', 'Sentadillas: 3 series de 12-15 repeticiones.', 'Flexiones con rodillas (knee push-ups): 3 series de 10-12 repeticiones.', 'Plancha: Mantén durante 30-45 segundos.', 'Zancadas hacia atrás: 3 series de 10-12 repeticiones por pierna.', 'Elevaciones de talones: 3 series de 15-20 repeticiones.'],
//     },
//     {
//       day: 'Día 2',
//       exercises: ['Realiza 30-45 minutos de cardio moderado seguido de otro circuito de cuerpo completo similar al del Día 1 y Dia 3.'],
//     },
//     {
//         day: 'Día 3',
//         exercises: ['Ejercicio 7', 'Ejercicio 8', 'Ejercicio 9'],
//         diet: 'Pautas de dieta para el día 3'
//       },
//   ];
  
  // Función para crear el contenido del plan de ejercicios
  function createExercisePlan() {
    const exerciseDaysContainer = document.querySelector('.exercise-days');
  
    exerciseDays.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('exercise-day');
  
      const dayHeading = document.createElement('h3');
      dayHeading.textContent = day.day;
  
      const exerciseList = document.createElement('ul');
      exerciseList.classList.add('exercise-list');
      day.exercises.forEach(exercise => {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = exercise;
        exerciseList.appendChild(exerciseItem);
      });
  
      const dietInfo = document.createElement('p');
      dietInfo.textContent = day.diet;
  
      dayDiv.appendChild(dayHeading);
      dayDiv.appendChild(exerciseList);
      dayDiv.appendChild(dietInfo);
  
      exerciseDaysContainer.appendChild(dayDiv);
    });
  }
  
  // Llama a la función para crear el plan de ejercicios
  createExercisePlan();
  