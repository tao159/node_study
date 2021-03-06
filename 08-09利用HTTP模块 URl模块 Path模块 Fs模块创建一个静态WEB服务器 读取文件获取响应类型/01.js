var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    
    var pathname=req.url;
    console.log(pathname);
    if(pathname=='/'){
        pathname='index.html';
    }
    if(pathname !='/favicon.ico'){
        fs.readFile('./static/'+pathname,function(err,data){
            if(err){
               fs.readFile('./static/404.html',function(err404,data404){
                res.writeHead(200,{'Content-Type':'all,charset:utf-8'});
                res.write(data404);
                res.end();
               })
            }else{
                res.writeHead(200,{'Content-Type':'all,charset:utf-8'});
                res.write(data);
                res.end();
            }
        })
    }
    
}).listen(3000);

console.log('server running at 127.0.0.1:3000');