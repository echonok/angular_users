const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/db');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('connected!');
});

mongoose.connection.on('error', (error) => {
  console.log('error!', error);
});


app.get('/', (req, res) => {
  res.send('it works!');
});

app.listen(port, () => {
  console.log(`started on port ${port}`);
})