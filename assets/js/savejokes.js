// displays the jokes in storage to the page
function displayJokes(){

    var listEl = $("#saved-jokes-list");
    var listItemsInStorage = JSON.parse(localStorage.getItem("jokes"));
    
    for (let i = 0; i < listItemsInStorage.length; i++) {
        var listItemEl = $('<li>');
        var deleteBtn = $('<button>Delete</button>');
        var text = listItemsInStorage[i]
        deleteBtn.attr('data-text',text);
        listItemEl.text(text);
        listItemEl.append(deleteBtn);
        listEl.append(listItemEl);

        deleteBtn.on('click', function(){
            var listItemsInStorage = JSON.parse(localStorage.getItem("jokes"));
            var data = $(this).attr('data-text')
            var filteredListItems = listItemsInStorage.filter((item, index) => {
                console.log({data, item})
              return  data !== item
            });
            localStorage.setItem('jokes',JSON.stringify(filteredListItems));
            $(this).parent().remove();
        
        })
    }
}
    
displayJokes();

