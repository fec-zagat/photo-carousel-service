/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Restaurant = require('../database/Restaurant.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/id/:id', (req, res) => {
  Restaurant.findById('5c9e9d340b52d24f643c655a', (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    }
    return res.send(result);
  });
});

app.listen(3002);
