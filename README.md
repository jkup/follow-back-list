# Follow back list

Find people you follow that do not follow you.

## Demo

A demo can be found at http://159.203.252.126:3000/

## Installation

    git clone https://github.com/jkup/follow-back-list.git
    cd follow-back-list

Then create a folder named config with a file inside called settings.js

    mkdir config
    touch config/settings.js

Finally, paste this inside:

    const Twitter = require('twitter');

    const client = Twitter({
    	consumer_key: '',
    	consumer_secret: '',
    	access_token_key: '',
    	access_token_secret: ''
    });

    module.exports = client;


Then just run:

    node .
