const casual = require('casual');

const following = {
    "following_count": 10,
    "users": []
}

//Adding Following
for( let i = 0; i < 20; i++) {
    let n = {
        "name": casual.name,
        "handle": casual.username,
        "profile_image_url":'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png.',
        "bio":casual.sentence,
        "followers_count":casual.integer,
        "following_count":casual.integer,
        "blue_verified":casual.boolean
    }
    
    following["users"].push(n);
}

module.exports = following;