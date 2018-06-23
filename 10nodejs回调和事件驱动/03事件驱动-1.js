//node.js有多个内置的事件，我们可以通过引入events模块，并通过实例化EventEmitter类来绑定和监听事件


var events = require('events');

//console.log(events);

var EventsEmitter = new events.EventEmitter();

//console.log(EventsEmitter); 

/*
//广播和接收广播

//监听to_parent广播
EventsEmitter.on('to_parent', function() {
    console.log('接收到了这个广播');
})

//两秒以后接收广播
setTimeout(function() {
    console.log('开始广播...');

    EventsEmitter.emit('to_parent', '发送的数据');
}, 2000)

*/

EventsEmitter.on('to_mime', function() {
    console.log('这是to_mime的数据');
})

EventsEmitter.on('to_parent', function() {
    console.log('接收到了这个广播');

    EventsEmitter.emit('to_mime', '接收到的mime的信息');
})

setTimeout(function() {
    console.log('开始接收广播了');

    EventsEmitter.emit('to_parent', '接收到的to_parent的信息')

}, 2000)