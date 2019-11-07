exports.seed = function(knex) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "Buttered Toast" },
    { id: 2, recipe_name: "Faker Pie" }
  ]);
};
