var express=require('express')

var app=new express()


app.get('/',function(req,res){
  res.send('你好，express')
})

app.get('/news',function(req,res){
  res.send('news模块')
})

app.get('/login',function(req,res){
  res.send('登录模块')
})

app.get('/register',function(req,res){
  res.send('注册模块')
})

//post
// app.post('/dologin',function(req,res){
//   res.send('注册模块')
// })

//动态路由
app.get('/newscontent/:aid',function(req,res){
  // 获取动态路由传值
  // req.params.aid

  res.send('newscontent'+req.params.aid)
  console.log(req);
  
})


app.listen(3000,'127.0.0.1');
