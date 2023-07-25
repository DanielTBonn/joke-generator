

function getApi(requestUrl) {

    fetch(requestUrl) 
        .then(function(response) {
            
            console.log(response);
            return response.json();;
        })
        .then(function(data) {
            console.log(data);
        })
    
}

var requestURL = 'https://roll-dice1.p.rapidapi.com/rollDice/?rapidapi-key=a652a06e19msh2f6363022ab93a8p1108bejsn7f3bb112893f';

getApi(requestURL);