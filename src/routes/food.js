const { Food } = require('./../models');

const FoodRoutes = {
  getFoodItems: (request, response) => {
    Food.findAll()
      .then(foodRecords => response.status(200).send(foodRecords))
      .catch(error => console.log(error));
  },

  getFoodItem: (request, response) => {
    Food.findOne({where: {id: request.params.id}})
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  createFoodItem: (request, response) => {
    Food.create(request.body)
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));    
  },

  updateFoodItem: (request, response) => {
    Food.update(request.body, {where: {id: request.params.id}})
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  deleteFoodItem: async (request, response) => {
    await Food.destroy({ where: { id: request.params.id } } );
    response.status(200).send(`Successfully deleted id ${request.params.id}`);
  },
};

module.exports = FoodRoutes;