const request = require('request');

// const options = {
//   url:
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
//     address +
//     '.json?access_token=pk.eyJ1Ijoibm9vYmV0YSIsImEiOiJjazM0MWk2YmswNGwxM2hvNDRoYm1uaW5pIn0.Xe56kQk7NeEnuOF6CEGYdA&limit=1',
//   json: true
// };
const geocode = (address, callback) => {
  //   const url =
  //     'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  //     address +
  //     '.json?access_token=pk.eyJ1Ijoibm9vYmV0YSIsImEiOiJjazM0MWk2YmswNGwxM2hvNDRoYm1uaW5pIn0.Xe56kQk7NeEnuOF6CEGYdA&limit=1';
  const options = {
    url:
      'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
      address +
      '.json?access_token=""&limit=1',
    json: true
  };

  request(options, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
