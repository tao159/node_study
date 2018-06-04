var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req, res) {

    var pathname = req.url;
    if (pathname == '/') {
        pathname = '/index.html'
    }
    if (pathname != '/favicon.ico') {
        fs.readFile('static/' + pathname, function(err, data) {
            if (err) {
                console.log(err);
                fs.readFile('static/404.html', function(err_404, data_404) {
                    res.writeHead(404, { 'Content-type': 'text/html;charset:utf-8' });
                    res.write(data_404);
                    res.end();
                })
            } else {
                res.writeHead(200, { 'Content-type': 'text/html;charset:utf-8' });
                res.write(data);
                console.log(path);
                res.end();
            }
        })
    }
}).listen(3000);
console.log('*****************************');
console.log('server running at "127.0.0.1:3000');
console.log('*****************************');