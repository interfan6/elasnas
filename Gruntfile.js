module.exports = function(grunt) {

grunt.initConfig({
	watch: {
	  scripts: {
		files: ['**/*.*'],
		tasks: ['ftpush'],
		options: {
		  interrupt : true,
		},
	  },
	},
	ftpush: {
	  build: {
		auth: {
		  host: 'ftp.blagichka.com',
		  port: 21,
		  authKey: 'key1'
		},
		src: './',
		dest: 'public_html/addon/elasnas.2ptest.in',
		exclusions: ['node_modules','.ftppass','Gruntfile.js','package.json','package-lock.json','.grunt','.git'],
		simple: true,
		useList: false,
		cachePath: './cache_upload.json'
	  }
	}
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-ftpush');
grunt.registerTask('default', ['watch']);

};