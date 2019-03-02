const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  timeStamp: Date

});

module.exports = formSchema;