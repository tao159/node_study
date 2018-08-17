var express = require('express');
var app = express();


//内置中间件，托管静态资源
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.send('你好，express');
})

//新闻路由
app.get('/news', function(req, res) {
    res.send('新闻路由');
})

//匹配所有路由
app.use(function(req, res) {
    res.status(404).send('这是404 表示路由没有匹配到');
})

app.listen(3000, '127.0.0.1');