const express = require('express');
// const casual = require('casual');
const followers = require('./followers')
const following = require('./following')

const cors =require('cors');




const app = express();
app.use(cors());
app.get('/followers', (req, res) => {
    const user_handle = req.params.userid;
    res.send(followers)
})

app.get('/following', (req, res) => {
    res.send(following)
})

app.listen(3000, () => {
    console.log('server is running on port : '+3000)
})

////////////////


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
            else {
                error;
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
loadJSON("http://localhost:3000/following", myData, 'jsonp');

function myData(Data) {
    let size = Object.keys(Data["users"]).length;
    console.log(size);
    let users = Data["users"];

    for (i = 0; i < size; i++) {
        console.log(users[i]["name"])
    }
}

module.exports = app;

