var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res) {
    fs.readFile('./app.html', function(err, data) {
        if (err) {
            return false;
        } else {
            res.writeHead(200, { 'Content-type': 'text/html;charset:utf-8' })
            res.write(data);
            res.end();
        }

    })
})
var io = require('socket.io')(app);
io.on('connection', function(socket) {
    console.log('服务器建立连接了');

    //服务器获取客户端广播的数据
    socket.on('addcart', function(data) {
        console.log(data);

        //服务器给客户端发送数据
        //socket.emit()  /*谁给我发的数据我就给谁发送数据*/
        //io.emit() /*群发 给所有连接服务器的客户端都广播数据*/
        //socket.emit('to-client', '我是服务器的数据' + data);
        io.emit('to-client', '我是服务器的数据' + data);

    })
})
app.listen(3000);