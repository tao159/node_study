exports.getMime = function(fs, extname, callback) {
    var data = fs.readFileSync('./mime.json');
    var mime = JSON.parse(data.toString());
    var res = mime[extname] || 'text/html';
    callback(res);
}