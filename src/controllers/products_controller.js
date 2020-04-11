const Product = require('../models/products');

module.exports = {
  list(request, response){
    response.json(request.body);
  },

  async create(request, response){
    try {
      let product = await Product.create(request.body);
      return response.status(201).json(product);
    } catch(error) {
      return response.json(error);
    }
  }
}