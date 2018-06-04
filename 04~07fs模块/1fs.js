/*
    fs模块：文件系统模块
    fs.stat:检测是文件还是目录

    fs.mkdir:创建目录
        参数：
            path:将要创建的目录的名称
            mode:目录权限(读写权限)，默认0777
            callback:回调，传递异常参数err

    fs.writeFile:创建写入文件
        参数
            filename (String) 文件名称
            data (String | Buffer) 将要写入的内容，可以使用字符串或buffer数据
            options (Object) option数组对象，包含
                encoding (string) 可选值，默认’utf-8‘,当data使用buffer时，该值应该为ignored
                mode （Number） 文件读写权限，默认值438
                flag (String) 默认值’w‘
            callback （Function） 回调，传递一个异常参数err.

    fs.appendFile 追加文件

    fs.readFile 读取文件

    fs.readdir 读取目录

    fs.rename 重命名

    fs.rmdir 删除目录  只能删除目录
    fs.unlink 删除文件 
*/

var fs = require('fs');

/*fs.stat
fs.stat('html', (err, stats) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log('文件' + stats.isFile());
    console.log('目录' + stats.isDirectory());
}) * /

/*fs.mkdir
fs.mkdir('css', function(err) {
    if (err) {
        console.log(err);
        return false;
    }

    console.log('创建成功');
}) * /

/*fs.writeFile
fs.writeFile('hello.txt', '你好，node.js,初学者', function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('写入成功');
})
*/
/*fs.appendFile
fs.appendFile('t1.txt', '这是写入的内容\n', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('写入成功');
}) * /

/*fs.readFile
fs.readFile('test.html', function(err, data) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(data.toString());
}) */

/*fs.readdir
fs.readdir('css', function(err, data) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(data);
}) */

/*fs.rename
fs.rename('html/index.html', 'html/news.html', function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('修改成功');
}) 
fs.rename('css/index.css', 'html/css/index.css', function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('修改成功');
}) */

/*fs.rmdir
fs.rmdir('t', function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('删除成功');
})
*/

fs.unlink('remove.txt', function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('删除成功');
})