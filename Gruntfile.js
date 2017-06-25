module.exports = function(grunt) {
    "use strict";

    require('jit-grunt')(grunt);
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      eslint: {
        options: {
          configFile: '.eslintrc.js'
        },
        target: ['./server-layer/*.js']
      }

    });

    grunt.registerTask('default', ['eslint']);
};
