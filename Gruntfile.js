module.exports = function(grunt){

	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true
		        },
		        src: ['index.html']
		    }
		},

		uglify: {
		    build: {
		        files: {
		            'build/js/si.min.js': ['src/js/si.js']
		        }
		    }
		},


		cssc: {
		    build: {
		        options: {
		            consolidateViaDeclarations: true,
		            consolidateViaSelectors:    true,
		            consolidateMediaQueries:    true
		        },
		        files: {
		            'build/css/social-icons.css': 'build/css/social-icons.css',
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'build/css/social-icons.css',
		        dest: 'build/css/social-icons.css'
		    }
		},

		sass: {
		    build: {
		        files: {
		            'build/css/social-icons.css': 'src/sass/social-icons.scss'
		        }
		    }
		},

		watch: {
		    html: {
		        files: ['index.html'],
		        tasks: ['htmlhint']
		    },
		    js: {
		        files: ['src/js/si.js'],
		        tasks: ['uglify']
		    },
		    css: {
		        files: ['src/sass/social-icons.scss'],
		        tasks: ['buildcss']
		    }
		}
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
};