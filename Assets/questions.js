var questions = [
    {
        title: "Which of these is not an infiniy stone?",
        choices: ["Time Stone", "Power Stone", "Mind Stone", "Hyper Stone"],
        answer: "Hyper Stone"
    },

    {
        title: "Who is the First Avenger?",
        choices: ["Loki", "Nick Fury", "Captain America", "Batman"],
        answer: "Captain America"
    },
    {
        title: "Which of the following is not a member of the Avengers?",
        choices: ["Thor", "Hawkeye", "The Punisher", "Black Widow"],
        answer: "The Punisher"
    },
    {
        title: "What planet is the Soul Stone found in?",
        choices: ["Mars", "Vormir", "Ego", "Metropolis"],
        answer: "Vormir"
    },
];

var score = 0;
var questionIndex = 0;


var currentTime = document.querySelector("currentTime");
var timer = document.querySelector("#startTime");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval= 0;
var penalty = 10;
var ulCreate= document.createElement("ul");

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time left " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Out of time!";

            }
        }, 1000);
    }
    render(questionIndex); 
});

function render(questionIndex) {
    questions.innerHtml = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}