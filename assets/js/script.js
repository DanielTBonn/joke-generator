// keys to both of our APIs
var diceUrl = 'https://roll-dice1.p.rapidapi.com/rollDice/?rapidapi-key=a652a06e19msh2f6363022ab93a8p1108bejsn7f3bb112893f';
var jokeUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';

// Created a jokes array
let jokesArr = [];

// gets the dice roll from our dice API
function getDiceApi(requestUrl) {
    
    fetch(requestUrl) 
    .then(function(response) {
        return response.json();
    })
        .then(function(data) {
            var roll = data.data.Dice;
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
            addJokes(data.joke);
            return data;
        })   
    }
}

// Stores jokes in local storage
function setStorage(jokes) {   
    // Converts jokes to be JSON readable
    let jokesString = JSON.stringify(jokes);
    localStorage.setItem("jokes", jokesString);
}

// Creates a variable that converts string back to an object that we can use in javascript
function getStorage() {
    let jokesDeString = JSON.parse(localStorage.getItem("jokes"));
    return jokesDeString;
}

// appends a new joke to localStorage, use this for saving jokes
function appendStorage(newJoke) {
    if (!localStorage.getItem("jokes")) {
        jokesArr = [];
    } else {
        jokesArr = getStorage();
    }
    
    jokesArr.push(newJoke);
    
    setStorage(jokesArr);
}

// This button will generate items to the page
var generateJokes = $("#jokes-gen-btn");
generateJokes.on('click', function() {
    
    // Empties page 
    $('#jokes-list').empty();

    // getDiceApi calls getJokeApi so only one function is needed
    getDiceApi(diceUrl);

})

// adds jokes to the page
var jokesList = $("#jokes-list").children();
function addJokes(joke) {
    // appendStorage(joke);
    var listEl = $('<li id="test-item-generated"></li>');
    var paraEl = $('<p style="color: rgb(24,231,28)"></p>');
    var btnEl = $('<button id="saveBtn"style="background-color:#33691e; width:100px;"><a class="waves-effect waves-teal btn-flat lime-text text-lighten-2" style="background-color:#33691e">Save</a></button>');
    initializeSaveButton(btnEl);
    paraEl.text(joke);
    listEl.append(paraEl);
    listEl.append(btnEl);
    $("#jokes-list").append(listEl)
}

// Every time a new button is appended to the page, you HAVE to have this function call it so the page recognizes what it does
function initializeSaveButton(button) {
    console.log(button);
    button.on('click', function() {
        var newJoke = $(this).parent().children().eq(0).text();
        appendStorage(newJoke);
    })
}
