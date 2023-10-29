// import request and api
const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search';

// User input via command line
const userInput = process.argv[2];

// Add query to URL for cat breed
let apiQuery = `${api}?q=${userInput}`;

// http request for api
request(apiQuery, (error, response, body) => {

  if (error) {
    console.log(`error: ${error}`);
  }
  
  if (!(response.statusCode >= 200 || response.statusCode < 300)) {
    console.log(`statusCode: ${response.statusCode}`);
  }

  const object = JSON.parse(body);
  console.log(object[0].description);
});

//Example
// node breedFetcher.js ragdoll