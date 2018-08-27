const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String

});

module.exports = formSchema;