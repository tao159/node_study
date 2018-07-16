var http = require('http'),
    url = require('url'),
    path = require('path'),
    ejs = require('ejs'),
    fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });
    var pathname = url.parse(req.url).pathname;
    var method = req.method.toLocaleLowerCase();

    if (pathname == '/login') {
        ejs.renderFile('./views/form.ejs', {}, function(err, data) {
            res.end(data);
        })

    } else if (pathname == '/doLogin' && method == 'get') {
        // console.log(url.parse(req.url, true).query);

        res.end('dologin get');

    } else if (pathname == '/doLogin' && method == 'post') {
        var postStr = '';
        req.on('data', function(chunk) {
            postStr += chunk;
        })

        req.on('end', function(err, chunk) {
            fs.appendFile('./login.txt' + chunk + '\n', function(err) {
                if (err) {
                    console.log('写入失败');
                    return false;
                }
                console.log('写入成功');
            })
        })


    } else {
        ejs.renderFile('./views/index.ejs', {}, function(err, data) {

            res.end(data);

        })
    }

}).listen(3000);
console.log('server running at localhost:3000');