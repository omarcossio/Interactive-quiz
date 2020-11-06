//set variables for HTML content
var startButton = document.querySelector("#startBtn");
var timeEl = document.querySelector(".timer");
var secondsLeft = 100;
var question = document.querySelector("#question");
var optionA = document.querySelector("#choiceA");
var optionB = document.querySelector("#choiceB");
var optionC = document.querySelector("#choiceC");
var rightWrong = document.querySelector("#rightWrong")
var welcome = document.querySelector(".welcome");
//Array composed of question objects
var questionOptions = [
    {
        q: "What's JS?",
        choices: [
            "A: A language for the web.",
            "B: A drink",
            "C: A cool nickname",
        ],
        answerIndex: 0
    },

    {
        q: "What's CSS?",
        choices: [
            "A: A language for the web.",
            "B: A drink",
            "C: A cool nickname",
        ],
        answerIndex: 0
    },

    {
        q: "What's Coffee?",
        choices: [
            "A: A language for the web.",
            "B: A drink",
            "C: A cool nickname",
        ],
        answerIndex: 1
    },

    {
        q: "What's dev?",
        choices: [
            "A: A language for the web.",
            "B: A drink",
            "C: A cool nickname",
        ],
        answerIndex: 2
    }
]

//current question indicator
var currentQuestionIndex = 0;

//function that displays question on webpage
function displayQuestion() {

    question.textContent = questionOptions[currentQuestionIndex].q;
    optionA.textContent = questionOptions[currentQuestionIndex].choices[0];
    optionB.textContent = questionOptions[currentQuestionIndex].choices[1];
    optionC.textContent = questionOptions[currentQuestionIndex].choices[2];

    //sets timeout on right or wrong indicator
    if(currentQuestionIndex != 0) {
        setTimeout(function() {rightWrong.textContent="";}, 1500);
    }   
}

//Tests for right answer
var userAnswer;
function answerChosen(userAnswer) {
    var rightAnswer = questionOptions[currentQuestionIndex].answerIndex;
    
    if(userAnswer == rightAnswer){
        rightWrong.textContent="You are RIGHT!";
    }
    else {
        rightWrong.textContent="You are WRONG!";
    }
    currentQuestionIndex++;
    displayQuestion();
}


//start quiz code
function startQuiz() {
    welcome.textContent = "";
    startTimer();
    displayQuestion();
}

//Event listeners
startButton.addEventListener("click", startQuiz);

optionA.addEventListener("click", function (sendAnswer) {
    var answerOption = 0;
    answerChosen(answerOption);
});
optionB.addEventListener("click", function (sendAnswer) {
    var answerOption = 1;
    answerChosen(answerOption)
});
optionC.addEventListener("click", function (sendAnswer) {
    var answerOption = 2;
    answerChosen(answerOption)
});

//Starts timer when quiz begins
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "You have " + secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
