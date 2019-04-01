const faker = require('faker');
const Restaurant = require('./Restaurant.js');

const sampleRestaurant = [];

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

for (let i = 1; i <= 100; i += 1) {
  sampleRestaurant.push({
    name: `${capitalize(faker.hacker.adjective())} ${capitalize(
      faker.hacker.noun(),
    )}`,
    imageUrl: faker.image.imageUrl(),
    createdAt: faker.date.past(),
  });
}

function insertSampleRest() {
  Restaurant.Restaurant.create(sampleRestaurant);
}

insertSampleRest();
