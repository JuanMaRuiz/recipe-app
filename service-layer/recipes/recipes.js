'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipesSchema = new Schema({
  "name" : String,
  "time" : Array,
  "ingredients" : Array,
  "preparation" : String
});

let Recipes = mongoose.model('Recipes', recipesSchema);

const getAllRecipes = function(callback) {
  Recipes.find({}, function(err, recipes) {
    if( err ) { throw err }
    console.log('recipes: ', recipes);
    return recipes;
  })
};

module.exports = {
  getAllRecipes
};
