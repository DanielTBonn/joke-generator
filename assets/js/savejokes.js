let today = dayjs();
console.log(today.$d);

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
    var authorEl = $('<p>Author: Student &ltStudent-UTA-VIRT@bootcampspot.com>')
    var dateEl = $('<p>Date: '+ today.$d +'</p>');
    var rowEl = $('<div class="row"></div>');
    var colEl = $('<div class="col m12"></div>');
    var cardEl = $('<div class="card grey darken-4"></div>');
    var cardContentEl = $('<div class="card-content white-text"></div>');
    var spanEl = $('<span class="card-title teal-text text-darken-4">Student-UTA-VIRT@DESKTOP <span class="purple-text text-darken-4">MINGW64 </span><span class="lime-text text-lighten-2">~</span></span>');
    var commitEl = $('<span class="lime-text text-lighten-1">commit ' + randomCommitGen()+ '</span>');
    var actionEl = $('<div class="card-action"></div>');
    var jokeEl = $('<span id="joke-text"> </span>');
    var paraEl = $('<br><p id="dollar-sign">&nbsp &nbsp &nbsp </p>');
    jokeEl.text(joke);
    actionEl.append(btnEl);
    cardContentEl.append(commitEl);
    cardContentEl.append(authorEl);
    cardContentEl.append(dateEl);
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
    return Math.floor(Math.random() * range);
}

randomCommitGen();
