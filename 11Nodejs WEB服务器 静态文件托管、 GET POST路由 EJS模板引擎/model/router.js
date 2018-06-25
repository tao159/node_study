var fs = require('fs'),
    path = require('path'),
    url = require('url');

exports.statics = function(req, res, static_path) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    if (pathname != '/facivon.ico') {
        fs.readFile(static_path + '/' + pathname, function(err, data) {
            if (err) {
                fs.readFile(static_path + '/404.html', function(err404, data404) {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });
                    res.write(data404);
                    res.end();
                })
            } else {
                getMime(extname, function(mime) {
                    res.writeHead(200, { 'Content-Type': '' + mime + ';charset:utf-8' });
                    res.write(data);
                    res.end();
                })
            }
        })
    }
}


//获取文件私有方法
function getMime(extname, callback) {
    fs.readFile('./mime.json', function(err, data) {
        if (err) {
            console.log('数据获取失败');
        } else {
            var json = JSON.parse(data.toString());
            var mime = json[extname];
            callback(mime);
        }
    })
}