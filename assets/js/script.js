// keys to both of our APIs
var diceUrl = 'https://roll-dice1.p.rapidapi.com/rollDice/?rapidapi-key=a652a06e19msh2f6363022ab93a8p1108bejsn7f3bb112893f';
var jokeUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';

// gets the dice roll from our dice API
function getDiceApi(requestUrl) {

   fetch(requestUrl) 
        .then(function(response) {
            
            console.log(response);
            return response.json();;
        })
        .then(function(data) {
            console.log(data);
            getJokeApi(jokeUrl, 5)
            return data;
        })
    
}

// gets the jokes per number of roll from the jokes api
function getJokeApi(requestUrl, roll) {

    for (i = 0; i < roll; i++) {

        fetch(requestUrl) 
        .then(function(response) {
            
            console.log(response);
            return response.json();;
        })
        .then(function(data) {
            console.log(data);
            return data;
        })
    }
        
     
 }

getDiceApi(diceUrl);
