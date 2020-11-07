var scorePage = document.getElementsByClassName("highScores");
var heading = document.querySelector("#heading");
var scoreList = document.querySelector("#scoreList");
var storedNames = JSON.parse(window.localStorage.getItem("nameArray"));
var nameArray = ["2 - andrea","5 - omar","6 - clarice"];
//init();
renderHighScores();

function init() {
    // Get stored names from localStorage
    // Parsing the JSON string to an object

    var savedNames = JSON.parse(window.localStorage.getItem("names"));
    if (savedNames !== null) {
        alert("not null");
        nameArray = savedNames.split(',');
        
        alert(savedNames);
    }
    
     renderHighScores();
    //document.getElementById("result").innerHTML = localStorage.getItem("textValue");
}

/*
for (var i = 0; i < nameArray.length; i++) {
    var name = nameArray[i];

    var li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
}
*/

function renderHighScores() {
    // Clear element 
    scorePage.innerHTML = "";
    nameArray.reverse();
    // Render a new li for each name
    for (var i = 0; i < nameArray.length; i++) {
        var name = nameArray[i];

        var li = document.createElement("li");
        li.textContent = name;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}