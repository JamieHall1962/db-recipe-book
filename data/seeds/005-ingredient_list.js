exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_list')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_list').insert([
        {name: 'Flour'},
        {name: 'Sugar'},
        {name: 'Salt'},
        {name: 'Water'},
        {name: 'Yeast'},
        {name: 'Ground Tomatoes'},
        {name: 'Seasoning'},
        {name: 'Brick Cheese'},
        {name: 'Mozzarella Cheese'},
        {name: 'Soft Shells'},
        {name: 'Hard Shells'},
        {name: 'Ground Beef'},
        {name: 'Cheddar Cheese'},
        {name: 'Chopped Tomatoes'},
        {name: 'Taco Sauce'},
        {name: 'Chili Powder'},
        {name: 'Chili Beans'},
        {name: 'Chili Peppers'},
        {name: 'Onions'},
        {name: 'Habanero Peppers'},
        {name: 'Tomato Paste'},
        {name: 'Tomato Puree'},
        {name: 'Rice'},
      ]);
    });
};
