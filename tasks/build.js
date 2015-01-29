/*
 * 
 */

var generate = require('./lib/packager');

module.exports = function(grunt) {
    grunt.registerMultiTask('build', 'Packages strapkit.js', function() {
        var done = this.async();
        var platformName = this.target;
        

        console.log(platformName);
       
        console.log("Gerenate some stuff....");

        generate(platformName, done);
    });
}
