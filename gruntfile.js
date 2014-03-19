module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
             dist: {
        src: [
            'js/stack/*.js'
        ],
        dest: 'js/production.js',
    }
},

        uglify: {
    build: {
        src: 'js/production.js',
        dest: 'js/production.min.js'
    }
},

sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build.css':'css/stack.scss'
        }
    } 
},

autoprefixer: {
    options: {
      // Task-specific options go here.
    },
    single_file: {
      options: {
        // Target-specific options go here.
      },
      src: 'css/build.css',
      dest: 'css/build.prefixed.css'
  },
},


watch: {
    scripts: {
        files: ['js/stack/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },

        css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false,
        }
    }
}



    });

    // Load All NPM Dependencies
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'watch']);

};