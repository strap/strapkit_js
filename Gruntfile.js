module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        build: {
            'android-wear':{},
            'pebble':{}
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['build']);

};
