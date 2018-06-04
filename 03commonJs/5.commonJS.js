var nav = require('nav');
//nav在根目录不存在，回去node_modules文件夹下找，找到了nav文件夹，nav文件夹里有package.json文件，
//找package文件里的"main":"nav.js"
console.log(nav);