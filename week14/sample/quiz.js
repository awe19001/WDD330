const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");


let questions = [
    {
        question: "What does HTML stand for?",
        imgSrc  : "smile.png",
        choiceA : "Wala ko kablelo",
        choiceB : "Unsa ganie",
        choiceC : "Ngao nor",
        correct : "A"
    },
    {
        question: "What does CSS stand for?",
        imgSrc  : "img.png",
        choiceA : "Wala ko kablelo",
        choiceB : "Unsa ganie",
        choiceC : "Ngao nor",
        correct : "C"
    },
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

runningQuestionIndex = 0;
renderQuestion()

runningQuestionIndex++
renderQuestion()

function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" +      + "></div>";

    
    }
}
function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}