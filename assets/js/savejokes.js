// displays the jokes in storage to the page
function displayJokes(){

    var listEl = $("#saved-jokes-list");
    var listItemsInStorage = JSON.parse(localStorage.getItem("jokes"));

    if (!listItemsInStorage || listItemsInStorage.length === 0) {
        showEmpty();
    } else {
        for (let i = 0; i < listItemsInStorage.length; i++) {
            var deleteBtn = $('<button id="delBtn"style="background-color:#33691e; width:100px;"><a class="waves-effect waves-teal btn-flat lime-text text-lighten-2" style="background-color:#33691e">Delete</a></button>');
            var text = listItemsInStorage[i]
            deleteBtn.attr('data-text',text);
            addJokeCard(text, deleteBtn);
            deleteBtn.on('click', function(){
                var listItemsInStorage = JSON.parse(localStorage.getItem("jokes"));
                var data = $(this).attr('data-text');
                var filteredListItems = listItemsInStorage.filter((item, index) => {
                    console.log({data, item})
                    return  data !== item
                });
                
                localStorage.setItem('jokes',JSON.stringify(filteredListItems));
                $(this).parent().parent().parent().remove();

                if (!filteredListItems || filteredListItems.length === 0) {
                    showEmpty();
                }
            })
        }
    }

}

function showEmpty() {
    var nothingSection = $('#nothing-here');
    var nothingHere = $("<h2 class='pink-text text-accent-3'>You have no saved jokes.</h2>");
    nothingSection.append(nothingHere);
}

displayJokes();

function addJokeCard(joke, btnEl) {
    var rowEl = $('<div class="row"></div>');
    var colEl = $('<div class="col m12"></div>');
    var cardEl = $('<div class="card black darken-1"></div>');
    var cardContentEl = $('<div class="card-content white-text"></div>');
    var spanEl = $('<span class="card-title teal-text text-darken-4">Student-UTA-VIRT@DESKTOP <span class="purple-text text-darken-4">MINGW64 </span><span class="lime-text text-lighten-2">~</span></span>')
    // var spanEl = $('<span class="card-title teal-text text-darken-4">Student-UTA-VIRT@DESKTOP <span class="purple-text text-darken-4">MINGW64 </span><span class="lime-text text-lighten-2">commit ' + randomCommitGen() +' (HEAD -> feature/add-cards)</span></span>')
    var actionEl = $('<div class="card-action"></div>');
    var jokeEl = $('<span id="joke-text"> </span>')
    var paraEl = $('<p id="dollar-sign" class="center-align"> </p>');
    jokeEl.text(joke);
    // var btnEl = $('<button class="teal"><a href="#">git commit</a></button>');
    actionEl.append(btnEl);
    cardContentEl.append(spanEl);
    paraEl.append(jokeEl);
    cardContentEl.append(paraEl);
    cardEl.append(cardContentEl);
    cardEl.append(actionEl);
    colEl.append(cardEl);
    rowEl.append(colEl);

    $("#saved-jokes-list").append(rowEl)

}

function randomCommitGen() {
    let commitLength = 40;
    let randomGenString = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < commitLength; i++) {
        let n = randomNumberGen(randomGenString.length);
        result += randomGenString[n];
    }

    return result;
}

function randomNumberGen(range) {
    console.log(range)
    return Math.floor(Math.random() * range);
}

randomCommitGen()
