
exports.seed = function(knex) {

      return knex('table_name').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: '2 Pieces of'},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: '1 Pat of'},
        {id: 3, recipe_id: 2, ingredient_id: 3, quantity: '1 Frozen, Uncooked'},

        
      ]);
};
