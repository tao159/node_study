var express = require('express');

var app = new express();

//动态路由 http://127.0.0.1:3000/newscontent/123
app.get('/newscontent/:aid', function(req, res) {
    var aid = req.params.aid;
    res.send('新闻模块' + aid);
})

//获取get传值 http://127.0.0.1:3000/product?aid=123
app.get('/product', function(req, res) {

    //获取get传值 req.query
    console.log(req.query);

    res.send('product' + req.query.aid);
})







app.listen(3000, '127.0.0.1');