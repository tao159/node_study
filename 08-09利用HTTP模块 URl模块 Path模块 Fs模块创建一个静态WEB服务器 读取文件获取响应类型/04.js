var http=require('http');
var fs=require('fs');
var path=require('path');
var Url=require('url');
var mimeModel=require('./model/getmime.js');
http.createServer(function(req,res){
    var pathname=Url.parse(req.url).pathname;
   
    if(pathname=='/'){
        pathname='/index.html';
    }
    var extname=path.extname(pathname);
    console.log(extname);
    if(pathname !='/favicon.ico'){
        fs.readFile('./static/'+pathname,function(error,data){
            if(error){
                fs.readFile('./static/404.html',function(err404,data404){
                    res.writeHead(200,{'Content-Type':'text/html;charset:utf-8'});
                    res.write(data404);
                    res.end();
                })
            }else{
                var mime=mimeModel.getMime(extname);
                res.writeHead(200,{'Content-Type':''+ mime +';charset:utf-8'});
                res.write(data);
                res.end();
            }

        })
    }
    
}).listen(3000);
console.log('server running at 127.0.0.3000');