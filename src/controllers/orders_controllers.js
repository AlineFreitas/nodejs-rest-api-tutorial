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
};