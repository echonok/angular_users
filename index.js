const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('it works!');
});

app.listen(port, () => {
  console.log(`started on port ${port}`);
})