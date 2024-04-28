// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  adminStatus: {
    type: Boolean,
    default: false, // Default value is false for non-admin users
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
