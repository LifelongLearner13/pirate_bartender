$(document).ready(function() {

  /* --- Constructors ---- */
  var Questions = function(strArry) {
    this.questionArray = strArry;
  };

  var Ingredients = function(strArray) {
    this.ingredientArray = strArray;
  };

  var Pantry = function(strArray) {
    this.pantryArray = strArray;
  };

  var Bartender = function() {
    this.createDrink = function();
    this.adjustPantry = function();
  }

});

printQuestions();

//User submits form
  //retrieveUserAns();
    //construct preference from input as global variables

  //constructDrink();

    //bartender.createDrink(pref);
      //ingredients.random

      //adjustPantry();

  //printDrink();


