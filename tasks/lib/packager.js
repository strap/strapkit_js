

var fs = require('fs');

module.exports = function generate(functionName, done) {
   

    if (!fs.existsSync('pkg')) {
        fs.mkdirSync('pkg');
    }

    if (!fs.existsSync('pkg/' + functionName)) {
        fs.mkdirSync('pkg/' + functionName);
    }

    if (!fs.existsSync('pkg/' + functionName + '/src')) {
        fs.mkdirSync('pkg/' + functionName + '/src');
    }

    var platformPath = 'src/platform/' + functionName + '/';

    var platformJsFiles = fs.readdirSync(platformPath);

    var sourcePath = 'src/common';

    var commonJsFiles = fs.readdirSync(sourcePath);

    var sameJsFiles = platformJsFiles.filter(function(obj) { return commonJsFiles.indexOf(obj) !== -1; });

    console.log(sameJsFiles);

    console.log(functionName);
};
