const questions = [
    {
        question: "which of the the following is correc syntax to print 'Hello World' in c?",
        options: ["printf('Hello World')","echo('Hello World');","Sysyem.out.println('Hello World');","print('Hello World')"],
        answer: "printf('Hello World')"
    },
    {
        question: "which data type is used to store a character in c?",
        options: ["int","char","float","string"],
        answer: "char"
    },
    {
        question: "which tag is used to create a hyperlink in HTML?",
        options: ["<img>","<a>","<link>","<href>"],
        answer: "<a>"
    },
    {
        question: "which tag is used to insert an image in a webpage?",
        options: ["<image>","<img>","<pic>","<src>"],
        answer: "<img>"
    },
    {
        question: "which CSS property is used to change the text color of an element?",
        options: ["font-color","color","text-color","background-color"],
        answer: "color"
    },
    {
        question: "which symbol is used to select an ID in CSS?",
        options: ["#",".","*","@"],
        answer: "#"
    },
    {
        question: "which class is used in Bootstrap to make a button look like a primary button?",
        options: ["btn-secondary","btn-important","btn-primary","button-primary"],
        answer: "btn-primary"
    },
    {
        question: "which Bootstrap class is used to create a responsive image?",
        options: ["img-resize","img-fluid","responsive-img","image-responsive"],
        answer: "img-fluid"
    },
    {
        question: "who is known as the father of the computer?",
        options: ["Alan Turing","Bill Gates","Charies Babbage","Tim Berners Lee"],
        answer: "Charies Babbage"
    },
    {
        question: "what was the first electronic general purpose computer?",
        options: ["UNIVAC","ENIAC","ADVAC","ABC"],
        answer: "ENIAC"
    }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectAnswer(li, currentQuestion.answer));
        optionsElement.appendChild(li);
    });
}

loadQuestion();

function selectAnswer(selectedOption, correctAnswer) {
    const options = optionsElement.querySelectorAll("li");
    options.forEach(option => {
        option.classList.add(option.textContent === correctAnswer ? "correct" : "incorrect");
        option.style.pointerEvents = "none";
    });

    if (selectedOption.textContent === correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "#28a745";
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "#dc3545";
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;
}

restartButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    loadQuestion();
});

function resetState() {
    nextButton.disabled = true;
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";
}
