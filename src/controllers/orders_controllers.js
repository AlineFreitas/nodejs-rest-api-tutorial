const orderRepository = require('../repositories/order');

const {v4: uuidv4} = require('uuid');

module.exports = {
  async create(request, response) {
    await orderRepository.create({
      customer: request.body.customer,
      number: uuidv4(),
      items: request.body.items,
    })
      .then((order) => {
        return response.status(201).json(order);
      })
      .catch((error) => {
        return response.status(400).json(error);
      });
  },
  async list(request, response) {
    await orderRepository.getAll()
      .then((orders) => {
        return response.status(200).json(orders);
      })
      .catch((error) => {
        return response.status(400).json(error);
      });
  },
  async getById(request, response) {
    await orderRepository.getById(request.params.id)
      .then((order) => {
        return response.status(200).json(order);
      })
      .catch((error) => {
        return response.status(400).json(error);
      });
  },
  async update(request, response) {
    await orderRepository.update(request.params.id, request.body)
      .then((order) => {
        return response.status(200).json(order);
      })
      .catch((error) => {
        return response.status(400).json(error);
      });
  },
  async delete(request, response) {
    await orderRepository.delete(request.params.id)
      .then((order) => {
        return response.status(200).send();
      })
      .catch((error) => {
        return response.status(400).json(error);
      });
  },
};