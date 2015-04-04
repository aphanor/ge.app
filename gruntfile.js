module.exports = function(grunt) {
	
	// Load NodeJS & Grunt dependencies 
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sync');
	
	// Start Grunt configuration
	
	grunt.initConfig({
		
		// Minified JavaScript		
		
		uglify: {
			options: {
			  mangle: {
			     except: ['jQuery', 'angular']
			  }
			},
			my_target: {
				files: {
					'prod/js/app.js': ['dev/js/**.js/**']
				}
			}
		},
		
		// Tracking tasks
		
		watch: {
			options: { 
				livereload: true
			},
			scripts: {
				files: ['dev/js/**/**'],
				tasks: ['uglify']
			},
			html: {
				files: ['dev/*.html'],
				tasks: ['sync:main']
			},
			sass: {
				files: ['dev/sass/*.scss'],
				tasks: ['compass:dev']
			},
			all_files: {
				files: ['dev/**/**'],
				tasks: ['sync:dev']
			}
		},
		
		// Minified SASS files & compile them via Ruby
		
		compass : {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		
		// Sync all the files from main, js and views directories
		
		sync: {
			main: {
			    files: [
					{cwd: 'dev/', src: ['*.html'], dest: 'prod/'}
				]
			},
			dev: {
				files: [
					{cwd: 'dev/', src: ['js/**', 'views/**'], dest: 'prod/'}
				]
				// ** updateAndDelete: true **
			}
		}
	})
	
	// Run tasks when grunt is called from the terminal
	grunt.registerTask('default', ['watch']);
}
