exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredient_list", function(tbl) {
      tbl.increments();
  
      tbl.string("name").notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredient_list");
  };
  