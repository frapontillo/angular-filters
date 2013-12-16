'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    src: 'src',
    dist: 'dist',
    test: 'test'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    dev: {
      reporters: 'dots'
    },
    karma : {
      options: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      travis: {
        browsers: ['PhantomJS']
      },
      local: {
        browsers: ['Chrome']
      },
      dev: {
        singleRun: false
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: [
        'Gruntfile.js',
        '<%= yeoman.src %>/**/*.js'
      ],
      test: {
        src: ['<%= yeoman.test %>/**/*.js'],
        options: {
          jshintrc: 'test/.jshintrc'
        }
      }
    },
    meta: {
      banner: '/**\n' + ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * @author <%= pkg.author.name %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' + ' */\n\n'
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      }
    },
    ngmin: {
      dist: {
        src: ['<%= yeoman.src %>/**/*.js'],
        dest: '<%= yeoman.dist %>/<%= pkg.name %>.js'
      }
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: ['common/*.js', '<%= yeoman.dist %>/<%= pkg.name %>.js'],
        dest: '<%= yeoman.dist %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: ['<%= yeoman.dist %>/<%= pkg.name %>.js'],
        dest: '<%= yeoman.dist %>/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.registerTask('build', ['clean:dist', 'ngmin', 'concat', 'uglify']);
  grunt.registerTask('travis', ['karma:travis', 'build']);
  grunt.registerTask('default', ['karma:travis', 'build']);

};