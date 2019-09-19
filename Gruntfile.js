const path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        builddir: 'webroot',
        copy: {
            default: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/',
                        flatten: true,
                        filter: 'isFile',
                        src: [
                            'roslib/build/roslib.js',
                            'requirejs/require.js',
                            'eventemitter2/lib/eventemitter2.js'
                        ],
                        dest: '<%= builddir %>/js/lib/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
}