// products-api-rest
const mongoose = require('mongoose');

const config = require('../bin/config');

mongoose.connect(
  config.connectionString,
  {useNewUrlParser: true, useUnifiedTopology: true},
);

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

module.exports= mongoose;