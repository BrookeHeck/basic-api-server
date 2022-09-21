const validator = (request, response, next) => {
  request.body.foodName || request.params.id ? next() : next('No body');
};

module.exports = validator;