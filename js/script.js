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


  Questions.prototype.print = function() {
    console.log('Printing questions: ' + this.questionArray);
  };

  var bartenderQuestions = new Questions(['Do ye like yer drinks strong?']);
  
  console.log(bartenderQuestions.print());

  var cookQuestions = new Questions(['cooks questions']);

  console.log(cookQuestions.questionArray);
});