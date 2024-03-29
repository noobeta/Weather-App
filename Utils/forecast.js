const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const options = {
    url:
      'https://api.darksky.net/forecast/"//token here"/' +
      latitude +
      ',' +
      longitude +
      '?units=si',
    json: true
  };

  request(options, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          ' It is currently ' +
          response.body.currently.temperature +
          ' degress out. There is a ' +
          response.body.currently.precipProbability +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
