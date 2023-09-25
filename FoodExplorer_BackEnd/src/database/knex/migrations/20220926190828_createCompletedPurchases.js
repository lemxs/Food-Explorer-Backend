exports.up = knex => knex.schema.createTable("completedPurchase", table => {
    table.increments("id"); 
    table.integer("user_id").references("id").inTable("users"); 

    table.text("orderStatus");

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("completedPurchase");
