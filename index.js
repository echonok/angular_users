const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/db');
const api = require('./routes/api');

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/api', api);

app.listen(port, () => {
  console.log(`started on port ${port}`);
})