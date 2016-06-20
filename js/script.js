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

  /*  */
  var Bartender = function() {
    this.createDrink = function(userPreferences) {
      var drink = {
        content: ''
      };
      for (var pref in userPreferences) {
        if (userPreferences[pref] === true) {
            var temp = masterIngredients[pref].randomIngredient();
            console.log(temp);
            pantry.adjustPantry(temp);
            console.log(pantry);
          //{strong: strongIngredients, sweet: sweetIngredients}
        }
      }
    };
  };

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
    adjustPantry: function(item) {
      this[item] = this[item] - 1;
    }
  };

  var prefs = {
    strong: true,
    salty: false,
    bitter: true,
    sweet: false,
    fruity: true
  }

  /* --- Set up question objects --- */
  var strongQuestion = new Question('Do ye like yer drinks strong?', 'strong');
  var saltyQuestion = new Question('Do ye like it with a salty tang?', 'salty');
  var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', 'bitter');
  var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?', 'sweet');
  var fruityQuestion = new Question('Are ye one for a fruity finish?', 'fruity');

  /* --- Set up ingredients --- */
  var strongIngredients = new Ingredient(['glug of rum', 'slug of whisky', 'splash of gin']);
  var saltyIngredients = new Ingredient(['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
  var bitterIngredients = new Ingredient(['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
  var sweetIngredients = new Ingredient(['sugar cube', 'spoonful of honey', 'splash of cola']);
  var fruityIngredients = new Ingredient(['slice of orange', 'dash of cassis', 'cherry on top']);

  var masterIngredients = {
    strong: strongIngredients,
    salty: saltyIngredients,
    bitter: bitterIngredients,
    sweet: sweetIngredients,
    fruity: fruityIngredients
  }

  /* --- Set up Bartender --- */
  var rob = new Bartender();
  rob.createDrink(prefs);
  console.log('sweet: ' + sweetIngredients.ingredientsArray);
  console.log('salty: ' + saltyIngredients.ingredientsArray);
  var counts = {};
  for (var i = 0; i < 10000; ++i) {
    var ing = sweetIngredients.randomIngredient();
    if (!(ing in counts)) counts[ing] = 0;
    counts[ing]++;
  }
  console.log(counts);

  //printQuestions();

  //User submits form
  //retrieveUserAns();
  //construct preference from input as global variables

  //constructDrink();

  //bartender.createDrink(pref);
  //ingredients.random

  //adjustPantry();

  //printDrink();

});
