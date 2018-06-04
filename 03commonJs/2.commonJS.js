var http = require('http');

//引入自定义模块
var tools = require('./tools.js');

var app = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });
    if (req.url != '/favicon.ico') {
        console.log(tools.add(1, 2));
        tools.sayHello();
    }
    res.write('hello');
    res.end('world');
})

app.listen('9001', '127.0.0.1');

console.log('server running at 127.0.0.1:9001');