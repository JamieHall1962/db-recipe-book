
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Detroit Style', dish_id: 1},
        { name: 'Chicago Style', dish_id: 1},
        { name: 'New York Style', dish_id: 1},
        { name: 'Tex Mex', dish_id: 2},
        { name: 'Granny Style', dish_id: 2},
        { name: '2 Alarm', dish_id: 3},
        { name: '5 Alarm', dish_id: 3},
        { name: 'Vegetarian', dish_id: 3}
       
      ]);
    });
};
