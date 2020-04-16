const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiaGFyZGlrZ2F1ciIsImEiOiJjamZ2OWlkcHkxNzk3MnFxa3MwNHE5ZXl5In0.XSaRawrhbY-26R42NwK6lQ&limit=1";
  request({ url, json: true }, (error, response) => {
    if (error) callback("Cannot connect to location API!", undefined);
    else if (response.body.features.length === 0)
      callback("Cannot find the given place, Try again.", undefined);
    else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
