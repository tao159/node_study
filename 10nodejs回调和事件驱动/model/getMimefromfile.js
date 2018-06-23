exports.getMime = function(fs, extname) {
    var data = fs.readFileSync('./mime.json');
    var mime = JSON.parse(data.toString());
    return mime[extname] || 'text/html';
}