var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname == '/login') {
        res.end('login');
    } else if (pathname == '/register') {
        res.end('register');
    }
}).listen(3000);