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

const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = guageWidth/questionTime;

function counterRender(){
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            questionRender();            
        }else {
            clearInterval(TIMER);
            scoreRender();
        }
    }

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer ){
        score++;
        answerIsCorrect();
    }else {
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    }else {
        clearInterval(TIMER);
        scoreRender();
    }
}

//Start Quiz
const start = document.getElementById("start");
start.addEventListener("click", startQuiz);

let TIMER;

function startQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}

//Score Render
function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePercent = Math.round(100 * score / questions.length) ;
    let img = ( scorePercent >= 80 ) ? "img/1.png" :
              ( scorePercent >= 60 ) ? "img/2.png" :
              ( scorePercent >= 40 ) ? "img/3.png" :
              ( scorePercent >= 20 ) ? "img/4.png" : "img/5.png" ;
      
      
       scoreContainer.innerHTML = "<img src=" + img +
                                  "><p>" + scorePercent + "%</p>";
                  
}



}