var deleteBtn = $('<button id="deleteButton">Delete</button>');
deleteBtn.on('click', function(){
    localStorage.removeItem('ul');
})