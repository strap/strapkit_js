
var fs = require('fs');

module.exports = function(grunt) {
    grunt.registerMultiTask('addFeatures', 'Add features to strapkit', function() {
        
        var platformPath = 'pkg/' + this.target + '/src/';

        var flags = grunt.option('features');
        
        folderArray = flags.split(',');
        console.log(folderArray);

        folderArray.forEach(function(src) {
            grunt.file.expand({
                cwd: src
            }, "**/*").forEach(function(path) {
                if (!fs.statSync(src + path).isDirectory()) {
                    grunt.file.copy(src + path, platformPath + path);
                }
            });
        }); 
    });

};
