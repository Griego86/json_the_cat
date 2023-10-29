// import request and api
const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search';


const fetchBreedDescription = (breedName, callback) => {
  // Add query to URL for cat breed
  let apiQuery = `${api}?q=${breedName}`;

  //HTTP request
  request(apiQuery, (error, response, body) => {
    const object = JSON.parse(body); // JSON string into actual object

    let description = null; // if name does not exist return null

    if (!(response.statusCode >= 200 || response.statusCode < 300)) {
      return `statusCode: ${response.statusCode}`;
    }

    if (object && object[0] !== undefined) {
      description = object[0].description; // If does exist return description
    }

    callback(error, description);
  });
};


module.exports = {
  fetchBreedDescription
};