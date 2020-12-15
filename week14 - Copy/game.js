const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const qImg = document.getElementById("qImg");
const questionCounterText = document.getElementById('questionCounter');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {    
        question : "Unsa ni sa English?",
        imgSrc : "img/egg.jpg",
        choice1 : "Eg",
        choice2 : "Egg",
        choice3 : "igg",
        choice4 : "age",
        answer: 2,
    },{
        question : "Unsa ni sa English?",    
        imgSrc : "img/lightning.jpg",
        choice1 : "Laytning",
        choice2 : "Lightning",
        choice3 : "Ligning",
        choice4 : "Liting",
        answer: 2,
    },{
        question : "Unsa ni sa English?",    
        imgSrc : "img/lips.jpg",
        choice1 : "Kips",
        choice2 : "Nips",
        choice3 : "Lips",
        choice4 : "Rips;",
        answer: 3,
    },{
        question : "Unsa ni sa English?",  
        imgSrc : "img/rainbow.jpg",
        choice1 : "Renbow",
        choice2 : "Rainbuw",
        choice3 : "Rainbow",
        choice4 : "Ranbow",
        answer: 3,
    },{
        question : "Unsa ni sa English?",    
        imgSrc : "img/bird.jpg",
        choice1 : "Beard",
        choice2 : "Bird",
        choice3 : "Berd",
        choice4 : "Bard",
        answer: 2,
    },{ 
        question : "Unsa ni sa English?",    
        imgSrc : "img/bread.jpg",
        choice1 : "Bread",
        choice2 : "Brade",
        choice3 : "Bride",
        choice4 : "Breed",
        answer: 1,
    },{ 
        question : "Unsa ni sa English?",    
        imgSrc : "img/cat.jpg",
        choice1 : "Kat",
        choice2 : "Cit",
        choice3 : "Cot",
        choice4 : "Cat",
        answer: 4,
    },{ 
        question : "Unsa ni sa English?",    
        imgSrc : "img/cup.jpg",
        choice1 : "Cup",
        choice2 : "Cope",
        choice3 : "Cop",
        choice4 : "Cap",
        answer: 1,
    },{ 
        question : "Unsa ni sa English?",    
        imgSrc : "img/eye.jpg",
        choice1 : "Eya",
        choice2 : "Aye",
        choice3 : "Eye",
        choice4 : "Iye",
        answer: 3,
    },{ 
        question : "Unsa ni sa English?",    
        imgSrc : "img/frog.jpg",
        choice1 : "Frag",
        choice2 : "Froug",
        choice3 : "Frog",
        choice4 : "Froug",
        answer: 3,
    }
    ];
    

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;
    qImg.innerHTML = "<img src="+ currentQuestion.imgSrc +">";

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
startGame();