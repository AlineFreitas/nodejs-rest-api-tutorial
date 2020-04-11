// products-api-rest
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/product-api-rest';

mongoose.connect(
  connectionString,
  {useNewUrlParser: true, useUnifiedTopology: true},
);

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

module.exports= mongoose;