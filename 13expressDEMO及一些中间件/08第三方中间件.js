var express = require('express');
var app = express();
//引入body-parser中间件
var bodyParser = require('body-parser');

//配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('你好，express');
})

//新闻路由
app.get('/news', function(req, res) {
    res.send('新闻路由');
})

app.get('/login', function(req, res) {
    res.render('login');
})

app.post('/dologin', function(req, res) {
    console.log(req.body) //获取post提交的数据
})

app.listen(3000, '127.0.0.1');