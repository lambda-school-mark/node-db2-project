exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id").primary();
    table.string("vin", 17).notNullable().unique();
    table.string("make", 255).notNullable();
    table.string("model", 255).notNullable();
    table.string("mileage", 255).notNullable();
    table.string("transmission", 255).notNullable();
    table.string("title", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
