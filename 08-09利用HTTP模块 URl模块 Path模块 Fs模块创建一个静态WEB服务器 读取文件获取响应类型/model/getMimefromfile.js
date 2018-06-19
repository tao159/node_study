exports.getMime=function(fs,extname){
    // fs.readFile('./mime.json',function(err,data){
    //     if(err){
    //         console.log('文件不存在');
    //         return false;
    //     }

    //     //console.log(data.toString());
    //     var Mime=JSON.parse(data.toString());
    //     //console.log(Mime);
    // })

    //同步加载文件
    var data=fs.readFileSync('./mime.json');
    var Mimes=JSON.parse(data.toString());
    return Mimes[extname] || 'text/html';
}