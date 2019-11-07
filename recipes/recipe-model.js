const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db('recipe_ingredients')
    .join('ingredients', 'ingredients.id, recipe_ingredients.ingredients_id')   
    .join('recipes', 'recipe.id', 'recipe_ingredients.recipe_id' ) 
    .select(
            'recipe_ingredients.quantity',
            'ingredients.ingredient_name'
            
            )
    .where("recipes.id", recipe_id);

    
}

function getInstructions(recipe_id) {
    return db('steps')
    .select(
        'steps.description'
    )
    where('steps.recipe_id', recipe_id)
}

