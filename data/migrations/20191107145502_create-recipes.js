exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("recipe_name", 256)
        .notNullable();
        
      })
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("ingredient_name", 256)
        .notNullable();
      })
      .createTable("steps", tbl => {
        tbl.increments();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.string("description")
          .notNullable();
      })
      .createTable("recipe_ingredients", tbl => {
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes");
        tbl.float("quantity");
        tbl.primary(["recipe_id", "ingredient_id"]);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("steps")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes");
  };
  