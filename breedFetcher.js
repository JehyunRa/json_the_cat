const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) callback(error, body);
    else {
      const data = JSON.parse(body);
      if (data.length) callback(error, `${data[0].description}`);
      else callback(error, `No contents found for ${breedName}.`);
    }
  });
};

module.exports = { fetchBreedDescription };
