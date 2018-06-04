var fs = require('fs');

/*
1.判断服务器上面有没有upload目录， 没有就创建这个目录（ 图片上传）
*/
// fs.stat('upload', function(err, stats) {
//     if (err) {
//         fs.mkdir('upload', function(error) {
//             if (error) {
//                 console.log(error);
//                 return false;
//             }
//             console.log('创建成功');
//         })
//     } else {
//         console.log(stats.isDirectory());
//         console.log('目录已存在');
//     }
// })

/*
    2. 找出html目录下面的所有目录， 然后打印出来
*/

var fileArr = [];
fs.readdir('html', function(err, file) {
    if (err) {
        console.log(err);
        return false;
    }

    (function getFile(i) {
        if (i == file.length) {
            console.log(fileArr);
        }
        fs.stat('html/' + fileArr[i], function(err, stats) {
            if (stats.isDirectory()) {
                fileArr.push(fileArr[i]);
            }

            getFile(i + 1);
        })
    })(0)
})