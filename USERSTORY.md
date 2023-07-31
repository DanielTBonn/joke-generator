# User Story 

As a funny guy
I WANT to save funny jokes
SO THAT I can laugh at them later when i'm down

## Acceptance Criteria 

GIVEN a webpage with a pair of dice on them
WHEN I click the dice 
THEN a random number of jokes appears
WHEN I like a joke
THEN I can save it for later to look at
WHEN I want to look at the joke
THEN I can switch to my saved jokes webpage
WHEN I no longer find a joke funny/need space for new jokes (up to 50)
THEN I can delete the joke out of my saved jokes webpage

# Notes

For the web pages we will want to be able to click back and forth to see old saved jokes and generate new ones, so we will need a navbar with links to and from
On the joke generator webpage we will want to see all the jokes pop up and the previous jokes dissappear when you click the generator button, AND you will want 
to save those jokes to localStorage.
On the old joke viewer page, we will want to view all of the old jokes, and we will want to be able to delete them. 


## JS stuff

We need another button eventListener to delete a joke from localStorage when clicked
We will need function to display locally stored jokes to the saved jokes page

## CSS Framework 

Use https://materializecss.com/pickers.html as CSS framework

Use materialize to create a list on the generate joke page -- we will add to the li properties whatever values we might need
Use materialize to create a list of saved jokes on the saved jokes page -- same sidenote as above

## DONE

We already have the API
We have already developed functionality to retrieve local storage
We need a button eventListener to add list items to the generator page
We need another button eventListener to save to localStorage when clicked
Use materializecss to create a navbar/header on both webpages