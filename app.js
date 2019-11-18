const geocode = require('./Utils/geocode');
const forecast = require('./Utils/forecast');

// const Options = {
//   url:
//     'https://api.darksky.net/forecast/f49915c32c53219813f947ebeb7212bb/10.890270,76.908043?units=si&lang=en',
//   json: true
// };

// request(Options, function(error, response) {
//   //const data = JSON.parse(response.body);
//   if (error) {
//     console.log('unable to connect to weather service!!');
//   } else if (response.body.error) {
//     console.log('wrong input');
//   } else {
//     console.log(response.body.currently);
//   }
// });
const address = process.argv[2];

if (!address) {
  console.log('please provide the address');
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log('error');
    }
    //console.log('Error', error);
    console.log('Data', data);

    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        return console.log('error');
      }
      //console.log('Error', error);
      console.log('Data', data);
    });
  });
}
// forecast(10.89806, 76.90028, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });
