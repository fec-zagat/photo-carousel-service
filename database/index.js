const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/restaurant';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
