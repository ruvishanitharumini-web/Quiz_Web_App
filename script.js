const quizDatabase = [
    { q: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Rome", correct: "c" },
    { q: "Which property is used in CSS to change the background color?", a: "color", b: "bgcolor", c: "background-color", d: "all-color", correct: "c" },
    { q: "What does CSS stand for?", a: "Colorful Style Sheets", b: "Cascading Style Sheets", c: "Computer Style Syntax", d: "Creative Sheet Style", correct: "b" },
    { q: "Which framework is used for responsive layouts?", a: "Python", b: "Bootstrap", c: "C++", d: "SQL", correct: "b" },
    { q: "Which event occurs when a user clicks an element?", a: "onmouseover", b: "onchange", c: "onclick", d: "onload", correct: "c" }
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;

const qText = document.getElementById('question-text');
const qCount = document.getElementById('question-count');
const optionsContainer = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const scoreBadge = document.getElementById('score-badge');

function loadQuestion() {
    const data = quizDatabase[currentIndex];
    selectedOption = null;
    nextBtn.disabled = true;
    
    qCount.innerText = `Question ${currentIndex + 1} of ${quizDatabase.length}`;
    qText.innerText = data.q;
    
    optionsContainer.innerHTML = '';
    ['a', 'b', 'c', 'd'].forEach(key => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        col.innerHTML = `
            <button class="btn w-100 py-3 option-btn text-start px-4 rounded-3 bg-light" onclick="handleSelect('${key}', this)">
                <span class="fw-bold me-2">${key.toUpperCase()}.</span> ${data[key]}
            </button>
        `;
        optionsContainer.appendChild(col);
    });
}

function handleSelect(key, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    selectedOption = key;
    nextBtn.disabled = false;
}


nextBtn.onclick = () => {
    if (selectedOption === quizDatabase[currentIndex].correct) {
        score++;
        scoreBadge.innerText = `Score: ${score}`;
    }

    currentIndex++;
    if (currentIndex < quizDatabase.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    const container = document.querySelector('.quiz-wrapper');
    container.innerHTML = `
        <div class="p-5 text-center animate-fade-in">
            <div class="display-1 text-primary mb-3"><i class="fas fa-trophy"></i></div>
            <h2 class="fw-bold">Quiz Completed!</h2>
            <p class="lead">You scored <strong>${score}</strong> out of ${quizDatabase.length}</p>
            <button class="btn btn-dark rounded-pill px-5 mt-3" onclick="location.reload()">Try Again</button>
        </div>
    `;
}


document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const msg = document.getElementById('userMessage').value.trim();

    if (name === "" || !email.includes("@") || msg === "") {
        alert("Please complete all fields with valid information.");
    } else {
        alert(`Success! Thank you, ${name}. Your message has been received.`);
        this.reset();
    }
};


loadQuestion();