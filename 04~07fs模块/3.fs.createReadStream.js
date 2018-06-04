var fs = require('fs');

// var readStream = fs.createReadStream('input.txt');

var fileReadStream = fs.createReadStream('input.txt');

// readStream.on('open', function(fd) {
//     console.log('开始读取文件');
// })

// readStream.on('data', function(data) {
//     console.log('读取到文件...');
//     console.log(data.toString());
// })

// readStream.on('end', function() {
//     console.log('读取文件完毕');
// })

// readStream.on('close', function() {
//     console.log('文件关闭');
// })

// readStream.on('error', function(err) {
//     console.log('读取文件失败');
// });

let count = 0; //读取的次数
var str = ''; /*保存数据*/
fileReadStream.on('data', (chunk) => {

    str += chunk;
    count++;
    console.log(count, str);
})

// fileReadStream.on('end', () => {
//     console.log('----结束----')
//     console.log(count);
//     console.log(str);
// })

fileReadStream.on('error', (error) => {
    console.log(error);
})