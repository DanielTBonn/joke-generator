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
    

    // DELETE THIS LINE IF YOU WANT PERSISTENT LOCALSTORAGE, IT WILL DELETE ALL OF OUR SAVED JOKES EVERYTIME THE PAGE IS RELOADED
    // localStorage.clear();

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



// Created a jokes array for testing
let jokesArr = [];

// grabs jokes from API

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
        jokesArr = []
    } else {
        jokesArr = getStorage();
    }
    
    jokesArr.push(newJoke);
    
    setStorage(jokesArr);
    console.log(localStorage)
}

// This button will generate items to the page
var generateJokes = $("#jokes-gen-btn");
generateJokes.on('click', function() {
    $('#jokes-list').empty();
    // getDiceApi calls getJokeApi so only one function is needed
    getDiceApi(diceUrl);

})



var jokesList = $("#jokes-list").children();
function addJokes(joke) {
    var listEl = $('<li id="test-item-generated"></li>')
    var paraEl = $('<p style="color: rgb(24,231,28)"></p>');
    var btnEl = $('<button id="saveBtn">Save</button>');
    initializeSaveButton(btnEl);
    paraEl.text(joke);
    listEl.append(paraEl);
    listEl.append(btnEl);
    $("#jokes-list").append(listEl)
}


// console.log(jokesList);
// console.log(jokesList.children().eq(0))

// add event listener for a button that saves a joke
var deleteBtn = $('<button id="deleteButton">Delete</button>');

jokesList.each(function() {
    initializeSaveButton($(this));
})


// Every time a new button is appended to the page, you HAVE to have this function call it so the page recognizes what it does
function initializeSaveButton(button) {
    
    button.on('click', function() {
        var userInput = $(this).children().eq(0).text();
        appendStorage(userInput);
    })
}


// add event listener for a button that deletes a joke 
function deleteButton(){
$(button).button().on('click', function() {
    $('').remove();
  });
}
// add a function that displays locally stored items to saved-jokes page




// dice list value input creates the inputlist for 
// var diceEl = document.getElementById('diceEx');
// var submit = document.getElementById('submitBtn');


// submit.addEventListener('click', function(){
//     var dicelist = diceEl.value;
//     console.log(dicelist);
//     for (var index = 0; index < dicelist; index++) {
//          var inputlist = document.createElement('li');
//         document.querySelector('ol').appendChild(inputlist);
//     }
// })
