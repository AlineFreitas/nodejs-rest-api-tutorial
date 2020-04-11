// products-api-rest
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/product-api-rest',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

module.exports= mongoose;