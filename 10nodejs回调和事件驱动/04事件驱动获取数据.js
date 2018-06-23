var fs = require('fs');
var events = require('events');

var EventEmitter = new events.EventEmitter();



function getMime() {
    fs.readFile('mime.json', function(err, data) {
        EventEmitter.emit('getData', data);
    })
}
getMime();
EventEmitter.on('getData', function(res) {
    console.log(res.toString());
})