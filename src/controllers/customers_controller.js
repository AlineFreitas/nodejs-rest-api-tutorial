const Customer = require('../models/customer');

module.exports = {
  async create(request, response){
    await Customer.create(request.body)
    .then(customer => {
      return response.status(200).json(customer);
    }).catch(error => {
      return response.status(400).json(error);
    });
  },
}