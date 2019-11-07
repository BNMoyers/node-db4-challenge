
exports.seed = function(knex) {
      return knex('steps').insert([
        {id: 1, recipe_id:1, description: 'toast until brown'},
        {id: 2, recipe_id:1, description: 'spread butter on toast'},        
        {id: 3, recipe_id:2, description: 'remove frozen pie from package'},        
        {id: 4, recipe_id:2, description: 'transfer to vintage, glass pie pan'},        
        {id: 5, recipe_id:2, description: 'bake according to package directions'},
        
      ]);
};
