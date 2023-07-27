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
            return data;
        })
    }

 }

getDiceApi(diceUrl);

// Creates the jokes object
let jokes = {
    jokeOne: "one",
    jokeTwo: "two"
}

// Converts jokes to string (this step might not be neccessary)
let jokesString = JSON.stringify(jokes);

// Stores jokes in local storage
localStorage.setItem("jokes", jokesString);
console.log(jokesString);

// Creates a variable that converts string back to an object
let jokesDeString = JSON.parse(localStorage.getItem("jokes"));
console.log(jokesDeString);

// Delete button will remove from local storage
localStorage.removeItem();
