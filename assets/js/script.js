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
            addJokeCard(data.joke);
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

function initializeSaveButton2(button) {
    console.log(button);
    button.on('click', function() {
        var newJoke = $(this).parent().parent().children().children().eq(1).children().text();
        console.log(newJoke);
        appendStorage(newJoke);
    })
}

function addJokeCard(joke) {
    var rowEl = $('<div class="row"></div>');
    var colEl = $('<div class="col m12"></div>');
    var cardEl = $('<div class="card grey darken-4"></div>');
    var cardContentEl = $('<div class="card-content white-text"></div>');
    var spanEl = $('<span class="card-title green-text text-darken-2">Student-UTA-VIRT@DESKTOP <span class="deep-purple-text text-darken-1">MINGW64 </span><span class="lime-text text-lighten-2">~</span></span>')
    var actionEl = $('<div class="card-action"></div>');
    var jokeEl = $('<span id="joke-text"> </span>')
    var paraEl = $('<p id="dollar-sign">$ </p>');
    jokeEl.text(joke);
    var btnEl = $('<button class="teal"><a href="#">git commit</a></button>');
    initializeSaveButton2(btnEl);
    actionEl.append(btnEl);
    cardContentEl.append(spanEl);
    paraEl.append(jokeEl);
    cardContentEl.append(paraEl);
    cardEl.append(cardContentEl);
    cardEl.append(actionEl);
    colEl.append(cardEl);
    rowEl.append(colEl);
    

    $("#jokes-list").append(rowEl)
}

