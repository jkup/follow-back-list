const Twitter = require('twitter');

const client = require('./config/settings');

const params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
