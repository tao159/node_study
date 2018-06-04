//引入http模块
var http = require('http');

//创建服务
//req:获取url信息
//res:浏览器染回相应信息
http.createServer(function(req, res) {

    //设置响应头，状态值：200，文件类型是html,字符集是utf-8
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });

    res.write('你好')

    res.end('hello world'); /*结束响应*/
}).listen(8888);
console.log('server running at http://127.0.0.1:8888');