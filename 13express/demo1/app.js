var express=require('express')

var app=express()

//应用级中间件，表示匹配任何路由
//应用：权限判断，有没有登录,没有就跳到登录页，登录了就跳到首页
app.use(function(req,res,next){
  console.log(new Date());
  next()  //路由继续向下匹配
})



app.get('/',function(req,res){
  res.send('index');
})

app.get('/news',function(req,res,next){
  console.log('news');
  next()
})

//
app.get('/news',function(req,res){
  res.send('这是路由中间件news')
})

app.listen('3001','127.0.0.1')
