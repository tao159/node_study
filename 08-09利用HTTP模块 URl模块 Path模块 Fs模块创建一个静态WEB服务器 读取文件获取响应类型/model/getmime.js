exports.getMime=function(opt){
    switch(opt){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/js';
        default:
            return 'text/html'
    }
}