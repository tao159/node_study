var fs = require('fs');

function getMime(callback) {
    fs.readFile('mime.json', function(err, data) {
        callback(data);
    })
}

getMime(function(res) {
    console.log(res);
})