const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4f01b0c2cb8f648862c0f4f8da78185a&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);
  request({ url, json: true }, (error, response) => {
    if (error) callback("Cannot connect to weather API!", undefined);
    else if (response.body.error)
      callback(
        "Could not find weather for the given location. Try again!",
        undefined
      );
    else {
      const {
        weather_descriptions,
        temperature,
        feelslike,
      } = response.body.current;
      callback(
        undefined,
        weather_descriptions +
          ". The temperature is " +
          temperature +
          " degrees outside. It feels like " +
          feelslike +
          " degrees outside."
      );
    }
  });
};

module.exports = forecast;
