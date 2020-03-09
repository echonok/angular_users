const mongoose = require('mongoose');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  title: {type: String},
  roles: {type: String},
  status: {type: String},
  addDate: {type: Date},
  lastUpdateDate: {type: Date},
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => User.findById(id, callback);

module.exports.getAllUsers = (callback) => User.find({}, callback);

module.exports.addUser = (newUser, callback) => User.create(newUser, callback);

module.exports.deleteUser = (user, callback) => User.findOneAndDelete(user, callback);

module.exports.editUser = (id, user, callback) => User.findByIdAndUpdate(id, user, callback);  
