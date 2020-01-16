const argv = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${argv}`, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data.length) console.log(`${data[0].name}: ${data[0].description}`);
    else console.log(`data not found`);
  } else console.error(`request failed: website not found`);
});