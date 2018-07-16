var http = require("http");
var url = require("url");
var model = require('./model/model.js');


http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname.replace('/', '');
    if (pathname != 'favicon.ico') {
        try {
            model[pathname](req, res);
        } catch (err) {
            model['home'](req, res);
        }
    }
}).listen(8001);

console.log('server running at localhost:8001');