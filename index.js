const alterFile = require('./file.js')



let file = process.argv.slice(2).shift();

alterFile(file);

