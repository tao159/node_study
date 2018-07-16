var G = {};

var app = function(req, res) {

    if (G['login']) {
        G['login'](req, res); //执行注册的方法
    }

}


//定义一个get方法
app.get = function(string, callback) {
    G[string] = callback;

    //注册方法
    // G[string]=function(req,res){}
}


//执行get方法
app.get('login', function(req, res) {
    console.log('login' + req);
})

setTimeout(function() {
    app('param1', 'param2');
}, 1000)