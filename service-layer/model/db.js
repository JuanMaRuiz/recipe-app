'use strict';

const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;

mongoose.connect('here-goes-your-mongodb-connection');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection successfully!');
});

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
  })
};

module.exports = {
  getAllRecipes
};
