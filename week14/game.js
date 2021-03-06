const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const qImg = document.getElementById("qImg");
const questionCounterText = document.getElementById('questionCounter');
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {    
        question : "",
        imgSrc : "img/egg.jpg",
        choice1 : "Eg",
        choice2 : "Egg",
        choice3 : "Igg",
        choice4 : "Age",
        answer: 2,
    },{
        question : "",    
        imgSrc : "img/lightning.jpg",
        choice1 : "Laytning",
        choice2 : "Lightning",
        choice3 : "Ligning",
        choice4 : "Liting",
        answer: 2,
    },{
        question : "",    
        imgSrc : "img/lips.jpg",
        choice1 : "Kips",
        choice2 : "Nips",
        choice3 : "Lips",
        choice4 : "Rips",
        answer: 3,
    },{
        question : "",  
        imgSrc : "img/rainbow.jpg",
        choice1 : "Renbow",
        choice2 : "Rainbuw",
        choice3 : "Rainbow",
        choice4 : "Ranbow",
        answer: 3,
    },{
        question : "",    
        imgSrc : "img/bird.jpg",
        choice1 : "Beard",
        choice2 : "Bird",
        choice3 : "Berd",
        choice4 : "Bard",
        answer: 2,
    },{ 
        question : "",    
        imgSrc : "img/bread.jpg",
        choice1 : "Bread",
        choice2 : "Brade",
        choice3 : "Bride",
        choice4 : "Breed",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/cat.jpg",
        choice1 : "Kat",
        choice2 : "Cit",
        choice3 : "Cot",
        choice4 : "Cat",
        answer: 4,
    },{ 
        question : "",    
        imgSrc : "img/cup.jpg",
        choice1 : "Cup",
        choice2 : "Cope",
        choice3 : "Cop",
        choice4 : "Cap",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/eye.jpg",
        choice1 : "Eya",
        choice2 : "Aye",
        choice3 : "Eye",
        choice4 : "Iye",
        answer: 3,
    },{ 
        question : "",    
        imgSrc : "img/frog.jpg",
        choice1 : "Frag",
        choice2 : "Froug",
        choice3 : "Frog",
        choice4 : "Froug",
        answer: 3,
    },{ 
        question : "",    
        imgSrc : "img/banana.jpg",
        choice1 : "Banana",
        choice2 : "Benene",
        choice3 : "Banini",
        choice4 : "Baneni",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/beak.jpg",
        choice1 : "Bake",
        choice2 : "Beak",
        choice3 : "Beik",
        choice4 : "Beki",
        answer: 2,
    },{ 
        question : "",    
        imgSrc : "img/bubble.jpg",
        choice1 : "Bubble",
        choice2 : "Bable",
        choice3 : "Bobble",
        choice4 : "Babol",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/doll.jpg",
        choice1 : "Dall",
        choice2 : "Dull",
        choice3 : "Doll",
        choice4 : "Dell",
        answer: 3,
    },{ 
        question : "",    
        imgSrc : "img/feet.jpg",
        choice1 : "Fit",
        choice2 : "Feet",
        choice3 : "Fat",
        choice4 : "Fiit",
        answer: 2,
    },{ 
        question : "",    
        imgSrc : "img/horse.jpg",
        choice1 : "Horse",
        choice2 : "Hourse",
        choice3 : "Hurse",
        choice4 : "Hours",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/pineapple.jpg",
        choice1 : "Pineapple",
        choice2 : "Paynaple",
        choice3 : "Fineapple",
        choice4 : "Penappale",
        answer: 1,
    },{ 
        question : "",    
        imgSrc : "img/monkey.jpg",
        choice1 : "Makey",
        choice2 : "Monkey",
        choice3 : "Mangkey",
        choice4 : "Munkey",
        answer: 2,
    },{ 
        question : "",    
        imgSrc : "img/shoes.jpg",
        choice1 : "Shus",
        choice2 : "Shoes",
        choice3 : "Shoese",
        choice4 : "Shuse",
        answer: 2,
    },{ 
        question : "",    
        imgSrc : "img/turtle.jpg",
        choice1 : "Turtle",
        choice2 : "Tortle",
        choice3 : "Tutur",
        choice4 : "Tortol",
        answer: 1,
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
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;
    qImg.innerHTML = "<img src="+ currentQuestion.imgSrc +">";

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();