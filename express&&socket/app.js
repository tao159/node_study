var express = require('express');
var app = express();
var path = require('path');

//第一步
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/news', function(req, res) {
    res.render('news')
})

//2监听端口
server.listen(8888, '127.0.0.1');

//3socket代码
io.on('connection', function(socket) {
    console.log('建立连接');

    //接收客户端发送的数据
    socket.on('message', function(data) {
        console.log('接收到客户端发送的数据' + data);
        //io.emit('sendMsg', data); //服务器给客户端发送数据


        //socket.emit智能机器人
        if (data == 1) {
            var msg = '您当前的花费有两元'
        } else if (data == 2) {
            var msg = '您当前的流量有200M'
        } else {
            var msg = '请输入正确的信息'
        }
        socket.emit('sendMsg', msg);
    })
})