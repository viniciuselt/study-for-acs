const form = document.getElementById('quiz-form');
const scoreDisplay = document.getElementById('score');
const correctAnswersDisplay = document.getElementById('correct-answers');

const correctAnswers = ['b', 'c', 'c', 'd', 'b', 'a', 'd', 'b', 'd', 'd', 'e', 'a', 'c'];

form.addEventListener('submit', event => {
	event.preventDefault();

	let score = 0;
	const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value,
        form.q11.value,
        form.q12.value,
        form.q13.value
	];

	const incorrectAnswers = [];

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 1;
		} else {
			incorrectAnswers.push(index + 1);
		}
	});

	scoreDisplay.innerText = `Você acertou ${score} de ${correctAnswers.length} perguntas.`;

	if (incorrectAnswers.length === 0) {
		correctAnswersDisplay.innerText = 'Parabéns! Você acertou todas as perguntas.';
	} else {
		const incorrectAnswersText = incorrectAnswers.map(num => `Pergunta ${num}`).join(', ');
		correctAnswersDisplay.innerText = `As perguntas que você errou foram: ${incorrectAnswersText}.`;
	}

	form.style.display = 'none';
	document.getElementById('results').style.display = 'block';
});
