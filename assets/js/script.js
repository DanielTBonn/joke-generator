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
getDiceApi(diceUrl);

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
localStorage.clear();

// 