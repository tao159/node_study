var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mimeModel = require('./model/getMimefromfile_callback.js');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    if (pathname != '/favicon.ico') {
        fs.readFile('./static/' + pathname, function(err, data) {
            if (err) {
                fs.readFile('./static/404.html', function(err404, data404) {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });
                    res.write(data404);
                    res.end();
                })
            } else {
                mimeModel.getMime(fs, extname, function(result) {
                    res.writeHead(200, { 'Content-Type': '' + result + ';charset:utf-8' });
                    res.write(data);
                    res.end();
                });

            }
        })
    }
}).listen(3000);

console.log('server running at 127.0.0.1:3000');