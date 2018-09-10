var express = require('express')

var app = express()

var bodyParser = require('body-parser')

//配置body-parser中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

//设置模板引擎
app.set('view engine', 'ejs')

//设置静态资源目录
app.use(express.static('static'))

app.get('/', function(req, res, next) {
    var list = [111, 222, 333];
    res.render('index', { 'list': list })
})

app.get('/login', function(req, res) {
    res.render('login')
})

app.post('/doLogin', function(req, res) {
    //获取post提交的数据
    console.log(req.body)
})
app.listen(3001, '127.0.0.1');