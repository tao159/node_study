var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var pathname = req.url;
    if (pathname = '/') {
        pathname = '/index.html'
    }
    if (pathname != '/favicon.ico') {
        fs.readFile('static/' + pathname, function(err, data) {
            if (err) {
                console.log(err);
                return false;
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' })
                res.write(data);
                res.end();
            }
        })

    }

}).listen(3000);

console.log('server running at 127.0.0.1:3000');