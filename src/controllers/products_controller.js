module.exports = {
  list(request, response){
    response.json(request.body);
  },
  async create(request, response){
    return response.json(request.body);
  }
}