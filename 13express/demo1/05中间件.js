var express = require('express')

var app = express()

//引入第三方中间件body-parser
var bodyParser = require('body-parser')


//设置body-parser中间件
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //parse application/json
app.use(bodyParser.json())


//应用级中间件，表示匹配任何路由
//应用：权限判断，有没有登录,没有就跳到登录页，登录了就跳到首页
app.use(function(req, res, next) {
    console.log(new Date());
    next() //路由继续向下匹配
})

//4内置中间件 托管静态页面
app.use(express.static('static'));

//1应用级中间件，匹配单个路由
app.use('/news', function(req, res, next) {
    console.log('新闻路由中间件，通过app.use');
    next();
})

//3匹配所有路由，错误处理中间件 404
// app.use(function(req, res) {
//     res.status(404).send('这是404，表示路由没有匹配到')
// })

app.get('/', function(req, res) {
    res.send('index');
})

//2路由级中间件
app.get('/news', function(req, res, next) {
    console.log('news');
    next()
})


app.get('/news', function(req, res) {
    res.send('这是路由中间件news')
})

//使用ejs
app.set('view engine', 'ejs')

app.use(express.static('static'))

//应用body-parser
app.get('/login', function(req, res) {
    res.render('login')
})


app.listen('3001', '127.0.0.1')