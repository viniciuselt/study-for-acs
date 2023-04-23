const form = document.getElementById('quiz-form');
const scoreDisplay = document.getElementById('score');
const correctAnswersDisplay = document.getElementById('correct-answers');

const correctAnswers = ['a', 'e', 'c', 'b', 'b', 'c'];

form.addEventListener('submit', event => {
event.preventDefault();
let score = 0;
const userAnswers = [
	form.q1.value,
	form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value
];

userAnswers.forEach((answer, index) => {
	if (answer === correctAnswers[index]) {
		score += 1;
	}
});

scoreDisplay.innerText = `Você acertou ${score} de ${correctAnswers.length} perguntas.`;

const incorrectAnswers = userAnswers.filter((answer, index) => {
	return answer !== correctAnswers[index];
});

if (incorrectAnswers.length === 0) {
	correctAnswersDisplay.innerText = 'Parabéns! Você acertou todas as perguntas.';
} else {
	correctAnswersDisplay.innerText = `As perguntas que você errou foram: ${incorrectAnswers.join(', ')}.`;
}

form.style.display = 'none';
document.getElementById('results').style.display = 'block';
});