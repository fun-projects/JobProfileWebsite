var gulp 	= require('gulp'),
	nodemon = require('gulp-nodemon'),
 iife = require('gulp-iife');


gulp.task('default',function(){
	nodemon({
		script:'./server/app.js',
		ext:'js',
		env:{
			PORT:5000,
			ENV:"developement"
		},
		ignore:['./server/node_modules/**','./public/**']
	})
	.on('restart',function(){
		console.log('restarting...')
	});
	return gulp.src(['public/controllers/**/*.js','public/directives/**/*.js','public/services/**/*.js'])
		.pipe(iife({
			prependSemicolon: false
		}))
		.pipe(gulp.dest("dist"));
});






