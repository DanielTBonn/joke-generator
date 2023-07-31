// keys to both of our APIs
var diceUrl = 'https://roll-dice1.p.rapidapi.com/rollDice/?rapidapi-key=a652a06e19msh2f6363022ab93a8p1108bejsn7f3bb112893f';
var jokeUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';

// gets the dice roll from our dice API
function getDiceApi(requestUrl) {

   fetch(requestUrl) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var roll = data.data.Dice
            console.log(roll);
            getJokeApi(jokeUrl, roll);
            return data;
        })
    
}

// gets the jokes per number of roll from the jokes api
function getJokeApi(requestUrl, roll) {

    for (i = 0; i < roll; i++) {
        fetch(requestUrl) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.joke);
            // This below line is for testing, will delete later
            appendStorage(data.joke);
            addJokes(data.joke);
            return data;
        })
    // This is for testing, but as a side note I have no idea why but we need this line below if we want to save to localStorage
    setStorage(jokesArr);
    }

 }


// Creates the jokes object
// let jokes = {
//     jokeOne: "one",
//     jokeTwo: "two"
// }

// Created a jokes array for testing
let jokesArr = [];

// grabs jokes from API

// Stores jokes in local storage
function setStorage(jokes) {   
    // Converts jokes to be JSON readable
    let jokesString = JSON.stringify(jokes);
    localStorage.setItem("jokes", jokesString);
}

// Creates a variable that converts string back to an object
function getStorage() {
    let jokesDeString = JSON.parse(localStorage.getItem("jokes"));
    return jokesDeString;
}

// appends a new joke to localStorage, use this for saving jokes
function appendStorage(newJoke) {
    if (!localStorage.getItem("jokes")) {
        jokesArr = []
    } else {
        jokesArr = getStorage();
    }

    jokesArr.push(newJoke);

    setStorage(jokesArr);
    console.log(localStorage)
}

// Delete button will remove from local storage
// localStorage.removeItem();

// Clear localStorage every time the script is rerun so our localStorage doesn't blow up 
// localStorage.clear();

// add event listener for a button that will generate items to the page
// var generateJokes = $("#jokes-gen-btn");
// generateJokes.on('click', function() {
//     getDiceApi(diceUrl);

// })



// var jokesList = $("#jokes-list").children();
function addJokes(joke) {
    var listEl = $('<li id="test-item-generated"></li>')
    var paraEl = $('<p style="color: rgb(24,231,28)"></p>');
    var btnEl = $('<button id="saveBtn">Save</button>');
    paraEl.text(joke);
    listEl.append(paraEl);
    listEl.append(btnEl);
    $("#jokes-list").append(listEl)
}



// add event listener for a button that deletes a joke 
// console.log(jokesList);
// console.log(jokesList.children().eq(0))

// jokesList.each(function() {
//     initializeSaveButton($(this));
// })

function initializeSaveButton(button) {
    
    button.on('click', function() {
        var userInput = $(this).children().eq(0).text();
        console.log(userInput);
    })
}

// add event listener for a button that saves a joke

// add a function that displays locally stored items to saved-jokes page

function displayJokes(){

var listEl = document.getElementById("saved-jokes-list");
var listItemText = JSON.parse(localStorage.getItem("jokes"));
var listItemEl = document.createElement('li');

    for(var i = 0; i < listItemText.length; i++){
        listItemEl.textContent = listItemText[i];
        listEl.appendChild(listItemEl);
    }
    console.log(listItemEl)
}
displayJokes();

// dice list value input creates the inputlist for 
var diceEl = document.getElementById('diceEx');
var submit = document.getElementById('submitBtn');

// submit.addEventListener('click', function(){
//     var dicelist = diceEl.value;
//     console.log(dicelist);
//     for (var index = 0; index < dicelist; index++) {
//          var inputlist = document.createElement('li');
//         document.querySelector('ol').appendChild(inputlist);
//     }
// })
