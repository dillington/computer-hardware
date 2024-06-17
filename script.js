document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const questions = [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Peripheral Unit"],
            answer: "Central Processing Unit"
        },
        {
            question: "Which component is known as the brain of the computer?",
            options: ["RAM", "CPU", "Hard Drive"],
            answer: "CPU"
        },
        {
            question: "What is the purpose of the cooling system?",
            options: ["Store data", "Perform calculations", "Prevent overheating"],
            answer: "Prevent overheating"
        }
    ];

    let quizHTML = '';

    questions.forEach((q, index) => {
        quizHTML += `<div class="question">
            <h4>${q.question}</h4>
            <ul>`;
        q.options.forEach(option => {
            quizHTML += `<li><input type="radio" name="q${index}" value="${option}"> ${option}</li>`;
        });
        quizHTML += `</ul>
        </div>`;
    });

    quizContainer.innerHTML = quizHTML;

    // Add event listener to check answers
    quizContainer.addEventListener('change', (e) => {
        const allQuestions = document.querySelectorAll('.question');
        allQuestions.forEach((q, i) => {
            const selectedOption = q.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                const isCorrect = selectedOption.value === questions[i].answer;
                q.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
            }
        });
    });
});