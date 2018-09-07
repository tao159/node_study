var express=require('express')

var app=new express()


//获取get传值  http://127.0.0.1:3000/product?aid=123
//动态路由 http://127.0.0.1:3000/product/123

app.get('/product',function(req,res){

  //获取get传值
  //req.query.参数名
  res.send('product');
  console.log(req.query);
})


app.listen(3000,'127.0.0.1');
