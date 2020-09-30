var axios = require('axios');
const https = require('https');
const fs = require('fs');


const httpsAgent = new https.Agent({
  pfx: fs.readFileSync('pfx/NEW06298331205001169_630922130907.p12'),
  passphrase: 'Baac@1234'

});


var config = {
  method: 'post',
  url: 'https://apixgw2.bot.or.th/bot-iwt/partner/bnapi/update-status-tracking',
  headers: {
    'X-IBM-Client-Id': '85ec20ca-8fc3-4863-a08e-76fd35321b43',
    'X-IBM-Client-Secret': 'oV7cI5oF0wO8eW4fQ2jD4gK3oN7iS8hF5dG5cE7eM7cN4tT7vH',
    'accept': 'application/json',
    'cache-control': 'no-cache',
    'content-type': 'application/json'
  },
  httpsAgent
};


axios(config)
  .then(function (response) {
    console.log(response.status);
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });