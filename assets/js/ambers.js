// add a function that displays locally stored items to saved-jokes page

function displayJokes(){

    var listEl = $("#saved-jokes-list");
    var listItemText = JSON.parse(localStorage.getItem("jokes"));
    var deleteBtn = $('<button id="delBtn">Delete</button>');
    console.log(listItemText);
    
    for (let i = 0; i < listItemText.length; i++) {
        var listItemEl = $('<li>');
        listItemEl.text(listItemText[i]);
        console.log(listItemEl);
        listEl.append(listItemEl);
        listEl.append(deleteBtn);
    }
}
    
displayJokes();