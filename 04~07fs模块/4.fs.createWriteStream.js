var fs = require('fs');
var data = '我是写入进来的数据\n';
var fileWriteStream = fs.createWriteStream('output.txt');

fileWriteStream.write(data, 'utf8');

//标记写入完成
fileWriteStream.end();
fileWriteStream.on('finish', function() {
    console.log('写入完成');
})

fileWriteStream.on('error', function() {
    console.log('写入失败');
})