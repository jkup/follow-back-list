const Twitter = require('twitter');
const client  = require('./config/settings');

const screen_name = 'kng';
var one_way_following = [];
var usersFinal = [];

// First get your followers
client.get('followers/ids', { screen_name: screen_name }, function(error, your_followers, response){
  if(error) throw error;

  var followers = your_followers.ids;

  // Then get your following
  client.get('friends/ids', { screen_name: screen_name }, function(error, your_following, response){
    if(error) throw error;

    var following = your_following.ids;

    // Iterate through each follower
    following.forEach(function(follow) {
      if (followers.indexOf(follow) === -1) {
        one_way_following.push(follow);
      }
    });

    // Turn user ids into a string
    var user_id_string = one_way_following.join();

    // Then get the people
    client.get('users/lookup', { user_id: user_id_string }, function(error, users, response) {
      if(error) throw error;

      users.forEach(function(user) {
        var userObject = {
          name: user.name,
          screen_name: user.screen_name,
          avatar: user.profile_image_url
        };

        usersFinal.push(userObject);
      });

      console.log(usersFinal);
    });
  });
});
