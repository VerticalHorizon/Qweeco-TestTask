module.exports = function(grunt) {
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: 'qweeco/src/**/*.js',
	      dest: 'qweeco/assets/js/script.js',
	    }
	  }
	});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};