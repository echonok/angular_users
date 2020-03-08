const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/getAllUsers', (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) {
      res.json({succes: false, msg: 'Something wrong with getting', error: err});
    } else {
      res.json({succes: true, msg: 'Got users', users: users});
    }
  });
});

router.post('/addUser', (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    roles: req.body.roles,
    status: req.body.status,
    addDate: req.body.addDate,
    lastUpdateDate: req.body.lastUpdateDate
  });
  User.addUser(newUser, (err) => {
    if (err) {
      res.json({succes: false, msg: 'User is not added', error: err});
    } else {
      res.json({succes: true, msg: 'User is added'});
    }
  });
});

router.post('/deleteUser', (req, res) => {
  let deletedUser = { _id: req.body._id };
  User.deleteUser(deletedUser, (err) => {
    if (err) {
      res.json({succes: false, msg: 'User is not deleted', error: err});
    } else {
      res.json({succes: true, msg: 'User is deleted'});
    }
  });
});

router.post('/saveUser', (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    roles: req.body.roles,
    status: req.body.status,
    addDate: req.body.addDate,
    lastUpdateDate: req.body.lastUpdateDate
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({succes: false, msg: 'User is not added', error: err});
    } else {
      res.json({succes: true, msg: 'User is added'});
    }
  });  
});

module.exports = router;