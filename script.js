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
var last = document.querySelector(".last");
var nameForm = document.querySelector("#nameForm");
var score = 0;

var storedNames = JSON.parse(window.localStorage.getItem("nameArray"));

var nameArray = [];

last.style.display = "none";



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
    startButton.style.display="none";
    question.textContent = questionOptions[currentQuestionIndex].q;
    optionA.textContent = questionOptions[currentQuestionIndex].choices[0];
    optionB.textContent = questionOptions[currentQuestionIndex].choices[1];
    optionC.textContent = questionOptions[currentQuestionIndex].choices[2];

    //sets timeout on right or wrong indicator
    if (currentQuestionIndex != 0) {
        setTimeout(function () { rightWrong.textContent = ""; }, 1500);
    }

}

//Tests for right answer
var userAnswer;
function answerChosen(userAnswer) {
    var rightAnswer = questionOptions[currentQuestionIndex].answerIndex;

    if (userAnswer != rightAnswer) {
        rightWrong.textContent = "You are WRONG!";
        //reducing time left because of incorrect answer
        secondsLeft -= 10;
    }
    else {
        rightWrong.textContent = "You are RIGHT!";
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < 4) {

        displayQuestion();
    }
    else {
        gameOver();
    }

}


//start quiz code
function startQuiz() {
    welcome.textContent = "";
    startTimer();
    displayQuestion();
}

//Event listeners
startButton.addEventListener("click", startQuiz);

var answerOption;

optionA.addEventListener("click", function (sendAnswer) {
    answerOption = 0;
    answerChosen(answerOption);
});
optionB.addEventListener("click", function (sendAnswer) {
    answerOption = 1;
    answerChosen(answerOption)
});
optionC.addEventListener("click", function (sendAnswer) {
    answerOption = 2;
    answerChosen(answerOption)
});

//Starts timer when quiz begins
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "You have " + secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            last.style.display = "block";
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    question.textContent = "GAME OVER";
    optionA.textContent = "";
    optionB.textContent = "";
    optionC.textContent = "";
    rightWrong.textContent = "";
    
    secondsLeft = 1;


}


function storeNames() {
    // Stringify and set "userNames" key in localStorage to userNames array
    window.localStorage.setItem("nameArray", JSON.stringify(nameArray));
}

// When form is submitted...
nameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInput = document.getElementById("nameInput");
    var userName = " " + score + " - " + userInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (userName === "") {
        return;
    }

    // Add new userName to nameArray array, clear the input
    if(storedNames !=null){
        nameArray = storedNames;
    }
    
    nameArray.push(userName);
    userInput.value = "";
    document.location.href = "./highscore.html";

    // Store updated userNames in localStorage, re-render the list
    storeNames();
});



