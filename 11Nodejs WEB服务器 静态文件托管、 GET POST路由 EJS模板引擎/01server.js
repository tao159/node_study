var http = require('http');
var router = require('./model/router.js');
http.createServer(function(req, res) {
    router.statics(req, res, './static');
}).listen(8001);
console.log('server running at localhost:8001');