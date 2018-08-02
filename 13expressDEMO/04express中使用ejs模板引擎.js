var express = require('express');

var app = express();

//配置ejs模板引擎
app.set('view engine', 'ejs');

//设置模板位置，不用设置时可不加
app.set('views', __dirname + '/views');

//express.static('public')给public目录下的文件提供静态web服务
app.use(express.static('public'));

//配置虚拟目录的静态web服务
//app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    //res.send('ejs的演示');
    res.render('index', { //ejs渲染模板
        name: '张三'
    })
})

app.get('/news', function(req, res) {
    var arr = ['111', '222', '333'];
    res.render('news', {
        list: arr
    });
});

app.listen(3001, '127.0.0.1');