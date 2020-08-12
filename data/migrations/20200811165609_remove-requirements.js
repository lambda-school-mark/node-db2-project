exports.up = function (knex) {
  return knex.schema.dropTable("cars");
};

exports.down = function (knex) {};
