var tools = {
    sayHello: function() {
        console.log('你好，nodejs');
    },
    add: function(x, y) {
        return x + y;
    }
}

//exports.tools = tools;
module.exports = tools;