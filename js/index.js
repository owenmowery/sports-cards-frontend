document.addEventListener("DOMContentLoaded", function() {
    // do whatever has to happen first in your application
    // for this app, need to load in all sports cards
    // get fetch request to our back end to load in card, this will live in the API class
    API.addCards()
    // if we have any event listeners that need to get appended to the page when it loads, 
    // they should get appended here too.
});