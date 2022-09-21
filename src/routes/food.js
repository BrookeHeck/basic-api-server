const { Food } = require('./../models');

const FoodRoutes = {
  getFoodItems: (request, response) => {
    Food.findAll()
      .then(foodRecords => response.status(200).send(foodRecords))
      .catch(error => console.log(error));
  },

  createFoodItem: (request, response) => {
    Food.create(request.body)
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));    
  },

  updateFoodItem: (request, response) => {
    Food.update(request.body, {where: {id: request.body.id}})
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  deleteFoodItem: (request, response) => {
    Food.destroy({where: {id: request.body.id}})
      .then(() => response.status(200))
      .catch(error => console.log(error));
  },
};

module.exports = FoodRoutes;