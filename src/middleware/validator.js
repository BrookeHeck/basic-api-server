const validator = (request, response, next) => {
  request.body.foodName ? next() : next('No body in request');
};

module.exports = validator;