// CRUD Functions go here eventually

const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  createDish,
  createRecipe,
  readDishes,
  readDishesById,
  readRecipes,
  readShoppingList
};

function createRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .into("recipes");
}

function createDish(dish) {
  return db("dishes")
    .insert(dish)
    .into("dishes");
}

function readDishes() {
  return db("dishes");
}

function readDishesById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function readRecipes() {
  return db("recipes");
}

function readShoppingList(id) {
  return db("Cultivated Shopping List")
    // Join logic goes here
}
