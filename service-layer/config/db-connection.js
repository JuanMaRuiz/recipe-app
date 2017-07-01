'use strict';

const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;

const dbConfig = require('./dbData');

console.log('dbConnect.dbConnection: ', dbConfig.url);

mongoose.connect(dbConfig.url);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection successfully!');
});
