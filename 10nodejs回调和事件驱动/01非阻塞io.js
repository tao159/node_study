var fs = require('fs');



//1,3,2
/*console.log(1);
//异步读取，非阻塞io
fs.readFile('mime.json', function(err, data) {
    console.log(2);
})
console.log(3);*/


function getMime() {
    console.log(1);

    fs.readFile('mime.json', function(err, data) {
        console.log(2);
        return data.toString();

    })

    console.log(3);
}



console.log(getMime()); //undefined.