/*
 * grunt-validate-webapp
 * https://github.com/freaktechnik/grunt-validate-webapp
 *
 * Copyright (c) 2015 Martin Giger
 * Licensed under the MPL-2.0 license.
 */

'use strict';

var WebAppValidator = require("webapp-validator-central");
var async = require("async");

module.exports = function(grunt) {
    grunt.registerMultiTask('validatewebapp', 'Grunt task to validate a webapp manifest file', function() {
        var done = this.async();

        var options = this.options({
            url: false,
            packaged: true,
            absolute: false,
            listed: false
        });

        var validator = new WebAppValidator(options.absolute);

        async.each(this.filesSrc, function(filepath, callback) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                callback("A file was not found");
            }
            else if(!filepath.match(/\.webapp$/)) {
                grunt.log.warn('File "' + filepath + '" is not a webapp manifest');
                callback("A file was no webapp manifest");
            }
            else {
                validator.validate(filepath, options, function(error, result) {
                    if(error) {
                        grunt.log.error(error);
                        callback(error);
                    }
                    else if(Object.keys(result.errors).length > 0 ||
                            Object.keys(result.warnings).length > 0) {
                        if(Object.keys(result.errors).length > 0) {
                            for(var e in result.errors) {
                                grunt.log.error(e+": "+result.errors[e]);
                            }
                        }
                        if(Object.keys(result.warnings).length > 0) {
                            for(var w in result.warnings) {
                                grunt.log.warn(w+": "+result.warnings[w]);
                            }
                        }
                        callback(true);
                    }
                    else {
                        grunt.log.ok('Manifest "'+filepath+'" is valid');
                        callback();
                    }
                });
            }
        }, function(error) {
            if(error) {
                done(false);
            }
            else {
                grunt.log.writeln("All webapps have been validated");
                done(true);
            }
        });
    });

};
