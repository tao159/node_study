var ejs = require('ejs');
var fs = require('fs');
var app = {
    login: function(req, res) {

        // console.log('login');
        // res.end('login');

        ejs.renderFile('views/form.ejs', {}, function(err, data) {
            res.end(data);
        })



    },
    register: function(req, res) {
        console.log('register');
        res.end('register');
    },
    home: function(req, res) {
        console.log('home');
        res.end('home');
    },
    doLogin: function(req, res) {
        var postStr = '';
        req.on('data', function(chunk) {
            postStr += chunk;
        })
        req.on('end', function(err, chunk) {
            console.log(postStr);
            fs.appendFile('login.txt', postStr + '\n', function(err, data) {
                if (err) {
                    console.log(err);
                    return false;
                }
                console.log('写入成功');
                res.end('<script>alert("登录成功");history.back();</script>')
            })
        })
    }
}

module.exports = app;