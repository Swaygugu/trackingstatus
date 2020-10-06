var axios = require('axios');
const https = require('https');
const fs = require('fs');


const httpsAgent = new https.Agent({
  pfx: fs.readFileSync('pfx/NEW06298331205001169_630922130907.p12'),
  passphrase: 'Baac@1234'

});


var config = {
  method: 'post',
  url: 'https://apigw2.bot.or.th/bot-iwt/partner-extranet/bnapi/update-status-tracking',
  headers: {
    'X-IBM-Client-Id': '942e7528-794b-4dfe-a940-0b1e732c1993',
    'X-IBM-Client-Secret': 'rA8qY1aX0lU5gU8nF8wI3lF3oK2eB6sK0tT5rR7uO7tB3tK5rN',
    'accept': 'application/json',
    'cache-control': 'no-cache',
    'content-type': 'application/json'
  },
  httpsAgent
};


axios(config)
  .then(function (response) {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });