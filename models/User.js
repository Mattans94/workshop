const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  age: Number,
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;