exports.getMime = function(fs, EventEmitter, extname) {
    var data = fs.readFileSync('./mime.json');
    var Mime = JSON.parse(data.toString());
    var result = Mime[extname] || 'text/html';
    EventEmitter.emit('to_mime', result);
}