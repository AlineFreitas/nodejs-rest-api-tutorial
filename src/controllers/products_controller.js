const productRepository = require('../repositories/products');

module.exports = {
  async list(request, response){
    await productRepository.findAll()
    .then( products => {
      return response.status(200).json(products);
    })
    .catch(error => {
      return response.status(400).json(error);
    });
  },

  async create(request, response){
    await productRepository.create(request.body)
    .then(product => {
      return response.status(201).json(product);
    })
    .catch(error => {
      return response.status(400).json(error);
    });
  },

  async getBySlug(request, response){
    await productRepository.findBySlug(request.params.slug)
    .then(product => {
      if(product) {
        return response.status(200).json(product);
      } else {
        return response.status(404).send();
      }
    })
    .catch(error => {
      return response.status(400).json(error);
    });
  },

  async getByTag(request, response){
    await productRepository.findByTag(request.params.tag)
    .then(products => {
      if(products) {
        return response.status(200).json(products);
      } else {
        return response.status(404).send();
      }
    })
    .catch(error => {
      return response.status(400).json(error);
    });
  }
}