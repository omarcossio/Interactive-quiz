var scorePage = document.getElementsByClassName("highScores");
var heading = document.querySelector("#heading");
var scoreList = document.querySelector("#scoreList");
// Get stored names from localStorage
var storedNames = JSON.parse(window.localStorage.getItem("nameArray"));
var nameArray = [];
init();


function init() {

    if (storedNames !== null) {
        nameArray = storedNames;
        
    }
    
     renderHighScores();
}


function renderHighScores() {
    // Clear element 
    scorePage.innerHTML = "";
    //sort list in descending order to show highest to lowest score
    nameArray.sort();
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