// displays the jokes in storage to the page
function displayJokes(){

    var listEl = $("#saved-jokes-list");
    var listItemsInStorage = JSON.parse(localStorage.getItem("jokes"));

    if (!listItemsInStorage) {
        // console.log(listItemsInStorage)
        var nothingSection = $('#nothing-here');
        var nothingHere = $("<h2 class='pink-text text-accent-3'>You have no saved jokes.</h2>");
        nothingSection.append(nothingHere);
        console.log("hi")

    } else {
        for (let i = 0; i < listItemsInStorage.length; i++) {
            var listItemEl = $('<li>');
            var deleteBtn = $('<button id="delBtn"style="background-color:#33691e; width:100px;"><a class="waves-effect waves-teal btn-flat lime-text text-lighten-2" style="background-color:#33691e">Delete</a></button>');
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

}
    
displayJokes();

