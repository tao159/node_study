var http = require('http'),
    ejs = require('ejs'),
    url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });

    var pathname = url.parse(req.url).pathname;
    if (pathname == '/login') {
        var message = '这是后台数据';
        var list = ['111', '222', '333'];
        ejs.renderFile('./views/login.ejs', { msg: message, list: list }, function(err, data) {
            res.end(data);

        })
    } else if (pathname == '/register') {
        var msg = '这是注册页面，也是注册路由';
        var h = '<h3>这是一个h3标签</h3>'
        ejs.renderFile('./views/register.ejs', { msg: msg, h: h }, function(err, data) {
            res.end(data);
        })
    }

}).listen(3000);


console.log('server running at localhost:3000');