const casual = require('casual');
const followers = {
    "followers_count": 8,
    "users": []
}

// Adding 20 Users
for( let i = 0; i < 20; i++) {
    let newUser = {
        "name": casual.name,
        "handle": casual.username,
        "profile_image_url":'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png.',
        "following":casual.boolean,
        "bio":casual.sentence,
        "followers_count":casual.integer,
        "following_count":casual.integer,
        "blue_verified":casual.boolean
    }
    followers["users"].push(newUser);
}

module.exports = followers;


