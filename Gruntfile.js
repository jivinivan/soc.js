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
		            'soc.min.js': ['src/js/soc.js']
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
		            'soc.min.css': 'soc.min.css',
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'soc.min.css',
		        dest: 'soc.min.css'
		    }
		},	

		sass: {
		    build: {
		        files: {
		            'soc.min.css': 'src/sass/soc.scss'
		        }
		    }
		},

		watch: {
		    html: {
		        files: ['index.html'],
		        tasks: ['htmlhint']
		    },
		    js: {
		        files: ['src/js/soc.js'],
		        tasks: ['uglify']
		    },
		    css: {
		        files: ['src/sass/soc.scss'],
		        tasks: ['buildcss']
		    }
		}
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
};