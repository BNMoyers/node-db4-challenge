//imports and dependencies
const express = require('express');
const RecipeRouter = require('./recipes/recipe-router');
const IngredientRouter = require('./ingredients/ingredient-router');

//server
const server = express();

//middleware
server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

//export
module.exports = server;