var gulp 	= require('gulp'),
	nodemon = require('gulp-nodemon');


gulp.task('default',function(){
	nodemon({
		script:'./bin/www',
		ext:'js',
		env:{
			PORT:3000
		},
		ignore:['./server/node_modules/**','./public/**']
	})
	.on('restart',function(){
		console.log('restarting...')
	});
});