const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  id: Number,
  photos: Array,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const searchById = (options, callback) => {
  Restaurant.findOne(options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = { Restaurant, searchById };
