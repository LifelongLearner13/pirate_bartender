# Requirments

* Bartender should ask questions
  * Do ye like yer drinks strong?
  * Do ye like it with a salty tang?
  * Are ye a lubber who likes it bitter?
  * Would ye like a bit of sweetness with yer poison?
  * Are ye one for a fruity finish? 
* Use user answers to identify ingredients
* UI which will ask the user to provide an input for each of the questions. 
* When the user submits their choices, store results in a preferences object
* Create a constructor for a bartender object, and give the bartender a createDrink method. This method should take the preferences object, and construct a new drink object by fetching randomly chosen ingredients from the pantry which match the user's preferences. 
* Create a bartender object, and add in logic so that when the user submits their preferences, the drink is created and displayed in your UI.


# Possible ingredients:

* Strong ingredients: Glug of rum, slug of whisky, splash of gin
* Salty ingredients: Olive on a stick, salt-dusted rim, rasher of bacon
* Bitter ingredients: Shake of bitters, splash of tonic, twist of lemon peel
* Sweet ingredients: Sugar cube, spoonful of honey, splash of cola
* Fruity ingredients: Slice of orange, dash of cassis, cherry on top

# Instructions
Create constructor functions for questions, ingredients, and the pantry (which will contain all of the available ingredients). Then use these constructors to create objects representing the bartenders questions, ingredients and pantry.