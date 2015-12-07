var Twitter  = require('twitter');
var client   = require('./config/settings');

module.exports = function(res, screen_name) {
  var one_way_following = [];
  var usersFinal        = [];

  // First get your followers
  client.get('followers/ids', { screen_name: screen_name }, function(error, your_followers, response){
    if (error) { console.log(error); }

    var followers = your_followers.ids;

    // Then get your following
    client.get('friends/ids', { screen_name: screen_name }, function(error, your_following, response){
      if (error) { console.log(error); }

      var following = your_following.ids;

      // Iterate through each follower
      following.forEach(function(follow) {
        if (followers.indexOf(follow) === -1) {
          one_way_following.push(follow);
        }
      });

      // First get only first 100 results
      one_way_following = one_way_following.slice(0, 99);

      // Turn user ids into a string
      var user_id_string = one_way_following.join();

      // Then get the people
      client.get('users/lookup', { user_id: user_id_string }, function(error, users, response) {
        if (error) { console.log(error); }

        users.forEach(function(user) {
          var userObject = {
            name: user.name,
            screen_name: user.screen_name,
            avatar: user.profile_image_url
          };

          usersFinal.push(userObject);
        });

        res.render('list', { users: usersFinal });
      });
    });
  });
}
