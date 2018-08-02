var express = require('express');

var app = new express();

app.get('/', function(req, res) {
    res.send('hello express');
})

app.get('/news', function(req, res) {
    res.send('news模块');
})

app.get('/login', function(req, res) {
    res.send('login模块');
})

app.get('/register', function(req, res) {
    res.send('register模块');
})

//post
// app.post('/dologin',function(req,res){

// })

//动态路由
app.get('/newscontent/:aid', function(req, res) {

    //获取动态路由的传值
    //console.log(req.params);
    var aid = req.params.aid;
    console.log(aid);
    res.send('newscontent模块' + aid);
})


app.listen(3000, '127.0.0.1');