// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/bird.jpg",
        choiceA : "Bard",
        choiceB : "Bird",
        choiceC : "Bord",
        correct : "B"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/bread.jpg",
        choiceA : "Breed",
        choiceB : "Bread",
        choiceC : "Brade",
        correct : "B"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/cat.jpg",
        choiceA : "Cut",
        choiceB : "Kat",
        choiceC : "Cat",
        correct : "C"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/cup.jpg",
        choiceA : "Cup",
        choiceB : "Cop",
        choiceC : "Coop",
        correct : "A"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/egg.jpg",
        choiceA : "Eg",
        choiceB : "Egg",
        choiceC : "igg",
        correct : "B"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/eye.jpg",
        choiceA : "Ice",
        choiceB : "Aye",
        choiceC : "Eye",
        correct : "C"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/frog.jpg",
        choiceA : "Frog",
        choiceB : "Frag",
        choiceC : "Frug",
        correct : "A"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/lightning.jpg",
        choiceA : "Laytning",
        choiceB : "Lightning",
        choiceC : "Ligning",
        correct : "B"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/lips.jpg",
        choiceA : "Kips",
        choiceB : "Nips",
        choiceC : "Lips",
        correct : "C"
    },{
        question : "CEBUANO TO ENGLISH",
        imgSrc : "img/rainbow.jpg",
        choiceA : "Renbow",
        choiceB : "Rainbuw",
        choiceC : "Rainbow",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}


