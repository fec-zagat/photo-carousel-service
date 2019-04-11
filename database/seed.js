const { Restaurant } = require('./Restaurant.js');

const restaurantMedia = [];

const randomPhotoLinks = () => {
  const linksArray = [];
  const link =    'https://s3-us-west-1.amazonaws.com/fec-restaurant/fec-restaurant-photos/food-photo';
  for (let i = 0; i < 20; i += 1) {
    if (
      !linksArray.includes(`${link}${Math.floor(Math.random() * 100) + 1}.jpg`)
    ) {
      linksArray.push(`${link}${Math.floor(Math.random() * 100) + 1}.jpg`);
    }
  }
  return linksArray;
};

for (let i = 1; i <= 100; i += 1) {
  restaurantMedia.push({
    id: i,
    photos: randomPhotoLinks(),
  });
}

function insertSampleRest() {
  Restaurant.create(restaurantMedia);
}

insertSampleRest();
