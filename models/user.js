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

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getAllUsers = function(id, callback) {
  User.find(id, callback);
};

module.exports.addUser = function(newUser, callback) {
  newUser.save(callback);
};
