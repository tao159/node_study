var express=require('express')

var app=express()

//配置ejs模板引擎
app.set('view engine','ejs')

//静态资源托管
//express.static('static') 给public目录下的文件提供静态web服务
app.use(express.static('static'))

app.get('/',function(req,res){
  // res.send('ejs演示')
  var list=['111','222','333']
  res.render('index',{
    arr:list
  });
})

app.listen('3001','127.0.0.1')
