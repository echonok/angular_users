const express = require('express');
const router = express.Router();

router.get('/getUsers', (req, res) => {
  res.send('users list');
});

router.post('/saveUser', (req, res) => {
  res.send('save user');
});

module.exports = router;