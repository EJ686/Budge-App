// BUDGET CONTROLLER
let budgetController = (function() {
    // Some code

})();



// UI CONTROLLER
let UIController = (function(){

    // Some code

})();


// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function() {
        // 1. Get the field input data
        // 2. Add the item to the budget CONTROLLER
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    });

    document.addEventListener('keypress', function(event) {
        console.log(event);
    });

})(budgetController, UIController);
