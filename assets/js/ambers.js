// add a function that displays locally stored items to saved-jokes page

function displayJokes(){

    var listEl = document.getElementById("saved-jokes-list");
    var listItemText = JSON.parse(localStorage.getItem("jokes"));
    var listItemEl = document.createElement('li');
    var deleteBtn = document.createElement('button').
    deleteBtn.textContent = 'delete';
    
        for(var i = 0; i < listItemText.length; i++){
            listItemEl.textContent = listItemText[i];
            listEl.append(listItemEl);
            listEl.append(deleteBtn);
        }
    }
    
    displayJokes();