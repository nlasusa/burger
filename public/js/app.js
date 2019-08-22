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
    button.html("");

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
    $('.content-burger').prepend(newBurger);
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

