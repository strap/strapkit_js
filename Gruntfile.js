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
        },
        browserify: {
            androidwear: {
                src: ['pkg/android-wear/src/exec.js', 'pkg/android-wear/src/strapkit.js'],
                dest: 'pkg/android-wear/strapkit.js',
                options: { 
                    browserifyOptions: { 
                        "standalone": "StrapKit",
                        "entry": "pkg/android-wear/src/strapkit.js"
                    }
                }                                           
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['clean', 'build']);
    grunt.registerTask('generate', ['clean', 'copy', 'addFeatures', 'browserify']);

};
