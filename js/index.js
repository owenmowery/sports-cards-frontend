document.addEventListener("DOMContentLoaded", function() {
    // do whatever has to happen first in your application
    // for this app, need to load in all sports cards
    // get fetch request to our back end to load in card, this will live in the API class
    API.addCards()
    API.grabAdmin()
    // if we have any event listeners that need to get appended to the page when it loads, 
    // they should get appended here too.

    //admin button event listener for displaying form 
    document.addEventListener("click", function() {
        const adminBtn = document.getElementById("admin-btn");
        const adminForm = document.getElementById("admin-login-container");
        if (event.target === adminBtn) {
            if (adminForm.style.display === 'none') {
                adminForm.style.display = "block";
            }
            else {
                adminForm.style.display = 'none';
            };
            
        };
    });

    //add new card button event listener that displays new card form 
    document.addEventListener("click", function() {
        const newCardBtn = document.getElementById("create-btn");
        const newCardForm = document.getElementById("add-card-container");
        if (event.target === newCardBtn) {
            if (newCardForm.style.display === 'none') {
                newCardForm.style.display = "block";
            }
            else {
                newCardForm.style.display = 'none';
            };
            
        };
    });

    //click event that handles admin login 
    document.addEventListener("click", function() {
        const adminLogInBtn = document.getElementById("admin-login-submit");
        if (event.target === adminLogInBtn) {
            console.log(event)
            Admin.authenticateAdmin(event);
        };
    });

    //click event to add card 
    document.addEventListener("click", function() {
        const submitBtn = document.getElementById('submit-btn');
        if (event.target === submitBtn) {
            Card.addCard(event);
        }
    })
});