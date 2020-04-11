// products-api-rest
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/product-api-rest',
  {useNewUrlParser: true}
);

mongoose.Promise = global.Promise;