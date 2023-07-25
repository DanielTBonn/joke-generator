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