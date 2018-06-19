var http=require('http');
var fs=require('fs');
var path=require('path');
var mimeModel=require('./model/getmime.js');
console.log(mimeModel.getMime('.css'));
http.createServer(function(req,res){
    var pathname=req.url;
    if(pathname=='/'){
        pathname='index.html';
    }
    var extname=path.extname(pathname);
    if(pathname !='/favicon.ico'){
        console.log(path.extname(pathname ));
        fs.readFile('./static/'+pathname,function(err,data){
            if(err){
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
}).listen(8080);
console.log('server running at 127.0.0.1:8080');