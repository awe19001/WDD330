const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const qImg = document.getElementById("qImg");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {    
     
        imgSrc : "img/egg.jpg",
        choice1 : "Eg",
        choice2 : "Egg",
        choice3 : "igg",
        choice4: "alert('Hello World');",
        answer: 2,
    },{
            
            imgSrc : "img/lightning.jpg",
            choice1 : "Laytning",
            choice2 : "Lightning",
            choice3 : "Ligning",
            choice4: "alert('Hello World');",
            answer: 2,
        },{
            
            imgSrc : "img/lips.jpg",
            choice1 : "Kips",
            choice2 : "Nips",
            choice3 : "Lips",
            choice4: "alert('Hello World');",
            answer: 3,
        },{
          
            imgSrc : "img/rainbow.jpg",
            choice1 : "Renbow",
            choice2 : "Rainbuw",
            choice3 : "Rainbow",
            choice4: "alert('Hello World');",
            answer: 3,
        }
    ];
    

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; 
    getNewQuestion();
};


getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    qImg.innerHTML = "<img src="+ currentQuestion.imgSrc +">";
  
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        getNewQuestion();
    });
});

startGame();