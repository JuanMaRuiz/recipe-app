'use strict';

const express = require('express');
const app = express();

const dbConnection = require('./../../service-layer/config/db-connection');

const recipes = require('./../../service-layer/recipes/recipes');

console.log('db.getAllRecipes(): ', recipes);
console.log('db.getAllRecipes(): ', recipes.getAllRecipes());
// set the view engine to ejs
app.set('views', './server-layer/app/views');
app.set('view engine', 'ejs');

const port = process.env.PORT || 9000;

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/user', function(req, res) {
    res.send('User profile view');
});

app.listen(port, function() {
   console.log(`App running in http://localhost:${port}`);
});
