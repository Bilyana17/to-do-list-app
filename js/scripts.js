function newItem() {

    //jQuery Code
    //1. Add a new item to the list of items: 

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //2. Cross out an item from the list of items:

    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3. Delete an item from the list of items: 

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    }

    // 4. Change order of the item of the list: 
    $('#list').sortable();

}
