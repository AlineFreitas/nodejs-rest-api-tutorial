module.exports = {
  create(request, response){
    return response.status(200).json({
      customer: request.body,
      message: "You've reached POST /customers endpoint on this server"
    });
  }
}