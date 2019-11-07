
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'bread'},
        {id: 2, ingredient_name: 'butter'},
        {id: 1, ingredient_name: 'Store-Bought Pie'}


      ]);
};
