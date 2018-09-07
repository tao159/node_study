let express = require('express')
let app = express()
let path = require('path')
let server = require('http').Server(app)
let io = require('socket.io')(server)

//设置模板引擎
app.set('view engine', 'ejs')
    //设置静态资源存放路径
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.render('index')
})

//监听端口
server.listen(8899, '127.0.0.1')

//socket
io.on('connection', function(socket) {
    console.log('建立连接')

    socket.on('message', function(data) {
        console.log('接收到客户端发送的数据' + data);

        io.emit('serverMessage', data);
    })
})