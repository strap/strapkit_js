module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        conf: {
            
        },
        build: {
            'android-wear': {},
            'pebble':{}
        },
        addFeatures: {
            'android-wear': {},
            'pebble': {}
        },
        clean: ['pkg'],
        copy: {
            androidwear: {
                expand: true,
                src: ['src/*.js', 'src/common/*.js', 'src/platform/android-wear/**'],
                dest: 'pkg/android-wear/src',
                flatten: true,
                filter: 'isFile',
            },
            pebble: {
                expand: true,
                src: ['src/*.js', 'src/common/*.js', 'src/platform/pebble/**'],
                dest: 'pkg/pebble/src',
                flatten: true,
                filter: 'isFile',
            }
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['clean', 'build']);

};
