const customerRepository = require('../repositories/customer');

module.exports = {
  async create(request, response) {
    await customerRepository.create(request.body)
      .then((customer) => {
        return response.status(200).json(customer);
      }).catch((error) => {
        return response.status(400).json(error);
      });
  },
  async list(request, response) {
    await customerRepository.getAll()
      .then((customer) => {
        return response.status(200).json(customer);
      }).catch((error) => {
        return response.status(400).json(error);
      });
  },
  async getById(request, response) {
    await customerRepository.getById(request.params.id)
      .then((customer) => {
        return response.status(200).json(customer);
      }).catch((error) => {
        return response.status(400).json(error);
      });
  },
};