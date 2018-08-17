var express = require('express'); //引入

var app = new express() //实例化



app.get('/', function(req, res) {
    res.send('hello express');
})
app.get('/news', function(req, res) {
    res.send('news 模块');
})


app.listen(3000, '127.0.0.1');