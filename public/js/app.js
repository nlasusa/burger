// html function to create burger template 
var burgerTemplate = (burgerName, id, devoured) => {
    var burgerContainer = $('<div>').attr({
        class: 'content-burger_list',
        id: id
    });
    var img = $('<img>').attr('src', './assets/img/cheeseburger.png');
    var name = $('<p>');
    var button = $('<button>').attr({
        'data-id': id,
        class: 'btn btn-default favorites',
        'data-state': devoured
    });

    name.html(burgerName);
    button.html('Devour it!');
  
    
    burgerContainer.append(img, name, button);
    return burgerContainer;
};

// no error, displays new burger
var displayNewBurger = (burger) => {
    var name = burger.burger_name;
    var id = burger.id;
    var devoured = burger.devoured;
    // pass the params 
    var newBurger = burgerTemplate(name, id, devoured);

    // adds new burger to the top 
    $('.content-burger').append(newBurger);
    // clear the input search bar 
    $('input').val('');
};

// error, doesn't display new burger 
var addBurgerFail = (response) => {
    alert('Burger Failed');
};

$('button[type=submit]').on('click', function(event) {
    event.preventDefault();
    var burgerName = $('input[name="burger_name"]').val();

    $.ajax({
        url: '/add',
        method: 'POST',
        data: {
            burger_name: burgerName
        }
    })
    .then(displayNewBurger)
    .catch(addBurgerFail);
});

// add to devoured burgers page
var addBurgerToDevoured = (burger) => {
    var id = burger.id; 
    $(`#${id}`).remove(); 
};

var addBurgerToDevouredFail = () => {
    alert("Unable to add to devoured list");
};

$(document).on("click", '.favorites', function() {

    var id = $(this).attr("data-id");
    var value = $(this).attr("data-state"); 

    let condition = value === '0' ? false : true;

    $.ajax({
        url: `/${id}/${!condition}`,
        method: 'PUT'
    })
        .then(addBurgerToDevoured)
        .catch(addBurgerToDevouredFail);
}); 

// delete a burger from list and db 
var removeBurgerOnDelete = (burger) => {
    var id = burger.id; 

    $(`.all-burgers .burger[data-id=${id}]`).remove();
};

    var removeBurgerFailed = () => {
        alert ("Oops, we had an issue deleting your burger!")
    };

    $(".all-burgers .burger button").on("click", function() {
        var id = $(this).attr("data-id"); 

        $.ajax({
            url: '/delete/' + id, 
            method: 'DELETE'
        })
        .then(removeBurgerOnDelete)
        .catch(removeBurgerFailed);
    });



