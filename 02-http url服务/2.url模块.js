/*
    URL模块的使用
    url.parse() 解析URL
        url.parse('http://www.baidu.com/new/index.html?token=123&id=1');

    url.format(urlObject) //是上面url.parse()操作的逆向操作
        url.format({
            protocol: 'http:',
            slashes: true,
            auth: null,
            host: 'www.baidu.com',
            port: null,
            hostname: 'www.baidu.com',
            hash: null,
            search: '?token=123&id=1',
            query: {
                token: '123',
                id: '1'
            },
            pathname: '/new/index.html',
            path: '/new/index.html?token=123&id=1',
            href: 'http://www.baidu.com/new/index.html?token=123&id=1'
        })
        
    url.resolve(form,to)  //添加或者替换地址
        > url.resolve('http://www.baidu.com', 'news');
        'http://www.baidu.com/news'
        > url.resolve('http://www.baidu.com/test', 'news')
        'http://www.baidu.com/news'
        > url.resolve('http://www.baidu.com/test/index.html', 'news')
        'http://www.baidu.com/test/news'

*/

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    //输入 http://127.0.0.1:8088/news?aid=1&uid=2 获取到aid和uid
    //获取浏览器url输入的信息：req.url
    //console.log(url);
    //console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/html,charset:utf-8' });

    //http://127.0.0.1:8088/news?aid=1&uid=2
    if (req.url != '/favicon.ico') {
        console.log(req.url); // /news?aid=1&uid=2
        console.log(url.parse(req.url, true));
    }
    res.write('hello world ');
    res.end('the end');
}).listen(8088);

console.log('server running at 127.0.0.1:8088');