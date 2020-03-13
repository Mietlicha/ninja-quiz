const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  result.setAttribute('class', 'result py-4 d-block bg-light text-center');
  scrollTo(0, 0);

  let output = 0;

  const count = setInterval(() => {
    if (output <= score) {
      span.textContent = `${output} %`;
      output++;
    } else {
      clearInterval(count);
    }
  }, 10);
});
