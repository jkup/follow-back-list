# One Way Following

Find people you follow that do not follow you.

## Installation

    git clone https://github.com/jkup/one-way-following.git
    cd one-way-following

Then create a folder named config with a file inside called settings.js

    mkdir config
    touch config/settings.js

Finally, paste this inside:

    const Twitter = require('twitter');

    module.exports = function() {
      return Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
      });

    }
