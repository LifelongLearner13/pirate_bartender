$(document).ready(function() {

    /* --- Constructors ---- */

    /* Takes a string representing the question text and a category
       representing the category the question belongs to. */
    var Question = function(str, category) {
        this.question = str;
        this.category = category;
    };

    /* Stores an array of ingredient names */
    var Ingredient = function(strArray) {
        this.ingredientsArray = strArray;
        this.randomIngredient = function() {
            var randNum = Math.floor((Math.random() * this.ingredientsArray.length));
            return this.ingredientsArray[randNum];
        };
    };

    //Creates PubEmployee constructor and defines method createOrder
    var PubEmployee = function() {
        this.createOrder = function(userPreferences) {
            var order = {
                content: ''
            };
            var orderArray = [];
            for (var pref in userPreferences) {
                if (userPreferences[pref] === true) {
                    var tempOrder = masterIngredients[pref].randomIngredient();
                    pantry.adjustPantry(tempOrder);
                    orderArray.push(tempOrder);
                }
            }
            order.content = orderArray.join(', ');
            return order;
        };
    };

    /*  */
    var pantry = {
        'glug of rum': 10,
        'slug of whisky': 10,
        'splash of gin': 10,
        'olive on a stick': 10,
        'salt-dusted rim': 10,
        'rasher of bacon': 10,
        'shake of bitters': 10,
        'splash of tonic': 10,
        'twist of lemon peel': 10,
        'sugar cube': 10,
        'spoonful of honey': 10,
        'splash of cola': 10,
        'slice of orange': 10,
        'dash of cassis': 10,
        'cherry on top': 10,
        'slice of cheddar': 10,
        'slice of pepper-jack': 10,
        'lettuce': 10,
        'tomatoes': 10,
        'pickles': 10,
        adjustPantry: function(item) {
            this[item] = this[item] - 1;
        }
    };

    /* --- Set up question objects --- */
    var strongQuestion = new Question('Do ye like yer drinks strong?', 'strong');
    var saltyQuestion = new Question('Do ye like it with a salty tang?', 'salty');
    var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', 'bitter');
    var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?', 'sweet');
    var fruityQuestion = new Question('Are ye one for a fruity finish?', 'fruity');
    var cheeseQuestion = new Question('Do you like it cheesy?', 'cheese');
    var vegetableQuestion = new Question('Do you like vegetables?', 'vegetable');

    var bartenderQuestions = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion];
    var burgerQuestions = [cheeseQuestion, vegetableQuestion];

    /* --- Set up ingredients --- */
    var strongIngredients = new Ingredient(['glug of rum', 'slug of whisky', 'splash of gin']);
    var saltyIngredients = new Ingredient(['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
    var bitterIngredients = new Ingredient(['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
    var sweetIngredients = new Ingredient(['sugar cube', 'spoonful of honey', 'splash of cola']);
    var fruityIngredients = new Ingredient(['slice of orange', 'dash of cassis', 'cherry on top']);
    var cheeseIngredients = new Ingredient(['slice of cheddar', 'slice of pepper-jack']);
    var vegetableIngredients = new Ingredient(['lettuce', 'tomatoes', 'pickles']);

    var masterIngredients = {
        strong: strongIngredients,
        salty: saltyIngredients,
        bitter: bitterIngredients,
        sweet: sweetIngredients,
        fruity: fruityIngredients,
        cheese: cheeseIngredients,
        vegetable: vegetableIngredients
    };

    /* --- Set up Bartender --- */
    var bartender = new PubEmployee();
    var burgerChef = new PubEmployee();

    //console.log(drink.content);

    /* --- Functions --- */
    function printQuestions() {
        for (var i = 0; i < bartenderQuestions.length; i++) {
            $('form').prepend(
                '<fieldset class="question"><p>' + bartenderQuestions[i].question + '</p><label for="' + bartenderQuestions[i].category + '"><input type="radio" name="' + bartenderQuestions[i].category + '" id="' + bartenderQuestions[i].category + '" value="true">yes</label><label for="strong-pref"><input type="radio" name="' + bartenderQuestions[i].category + '" id="' + bartenderQuestions[i].category + '" value="false">no</label></fieldset>');
        }
        for (i = 0; i < burgerQuestions.length; i++) {
            $('form').prepend(
              '<fieldset class="question"><p>' + burgerQuestions[i].question + '</p><label for="' + burgerQuestions[i].category + '"><input type="radio" name="' + burgerQuestions[i].category + '" id="' + burgerQuestions[i].category + '" value="true">yes</label><label for="strong-pref"><input type="radio" name="' + burgerQuestions[i].category + '" id="' + burgerQuestions[i].category + '" value="false">no</label></fieldset>');
        }
    }

    function printOrder(order) {
        alert('Your order includes ' + order.content + '.' + ' Woot!');
    }

    printQuestions();

    $('form').submit(function(event) {
            event.preventDefault();
            var prefs = {
                strong: $('#strong:checked').val() === 'true',
                salty: $('#salty:checked').val() === 'true',
                bitter: $('#bitter:checked').val() === 'true',
                sweet: $('#sweet:checked').val() === 'true',
                fruity: $('#fruity:checked').val() === 'true',
            };
            var burgerPrefs = {
                cheese: $('#cheese:checked').val() === 'true',
                vegetable: $('#vegetable:checked').val() === 'true'
            };
            console.log(prefs);
            var drink = bartender.createOrder(prefs);
            var burger = burgerChef.createOrder(burgerPrefs);
            printOrder(drink);
            printOrder(burger);
            console.log(drink);
            console.log(burger);
        }

    );
});
