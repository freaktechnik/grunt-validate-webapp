/*
 * grunt-validate-webapp
 * https://github.com/freaktechnik/grunt-validate-webapp
 *
 * Copyright (c) 2015 Martin Giger
 * Licensed under the MPL-2.0 license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    validatewebapp: {
      default_options: {
        files: { src: 'test/packaged-manifest.webapp'}
      },
      custom_options: {
        options: { packaged: false },
        files: { src: 'test/manifest.webapp'}
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['validatewebapp']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
