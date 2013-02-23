/*
 * gruntacular
 * https://github.com/OpenWebStack/gruntacular
 *
 * Copyright (c) 2013 Dave Geddes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('gruntacular');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    options: {
      configFile: 'testacular.conf.js',
      browsers: ['Chrome'],
      singleRun: true
    },
    dev: {
      reporters: 'dots'
    },
    testacular : {
      options: {
        configFile: 'testacular.conf.js',
        runnerPort: 9999,
        browsers: ['Chrome']
      },
      travis: {
        browsers: ['Firefox'],
        singleRun: true
      },
      single: {
        browsers: ['Chrome'],
        singleRun: true
      },
      dev: {
        reporters: 'dots'
      }
    },
    builddir: 'build',
    meta: {
      banner: '/**\n' + ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * @author <%= pkg.author.name %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' + ' */\n\n'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: ['common/*.js', 'modules/*/*/*.js'],
        dest: '<%= builddir %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      build: {
        src: ['<%= builddir %>/<%= pkg.name %>.js'],
        dest: '<%= builddir %>/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.registerTask('build', 'build all or some of the filters', function () {
    var jsBuildFiles = grunt.config('concat.build.src');

    if (this.args.length > 0) {
      this.args.forEach(function(moduleName) {
        var modulejs = grunt.file.expandFiles('modules/*/' + moduleName + '/*.js');
        jsBuildFiles = jsBuildFiles.concat(modulejs);
      });
      grunt.config('concat.build.src', jsBuildFiles);
    } else {
      grunt.config('concat.build.src', jsBuildFiles.concat(['modules/*/*/*.js']));
    }

    grunt.task.run(['concat', 'uglify']);
  });

  grunt.registerTask('travis', ['testacular:travis', 'build']);
  grunt.registerTask('default', ['testacular:single', 'build']);
};