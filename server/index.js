const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database/index');
const { searchById } = require('../database/Restaurant');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  '/r/:restaurants',
  express.static(path.join(__dirname, '../client/dist')),
);

app.get('/restaurant/:id', (req, res) => {
  searchById({ id: req.params.id }, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(3002);
