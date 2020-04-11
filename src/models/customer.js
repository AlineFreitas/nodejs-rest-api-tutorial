const mongoose = require('../database');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cpf: {
    type: String,
    require: true,
    unique: true,
    index: true,
    min: [11, 'CPF must be either 11 carachters long '+
          '(without symbols) or 14 (with symbols).'],
    max: [14, 'CPF must be either 11 carachters long '+
          '(without symbols) or 14 (with symbols).'],
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'passwords must have at least 6 characters'],
    select: false,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports= mongoose.model('Customer', customerSchema);