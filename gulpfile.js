"use strict"

var gulp         = require('gulp');
var concatCSS    = require('gulp-concat-css'); 
var cleanCSS     = require('gulp-clean-css'); // to minify  
var rename       = require("gulp-rename"); 
var notify       = require("gulp-notify"); 
var autoprefixer = require('gulp-autoprefixer');
var connect      = require('gulp-connect'); 

//GULP LESS 
var less         = require('gulp-less');

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
}); 

gulp.task('less', function(){
	gulp.src('./less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./css/'))
});

gulp.task('css', function(){
	return gulp.src('./css/*.css')           // src files 
		.pipe(autoprefixer({ browsers: ['last 11 versions'], cascade: false })) 
		.pipe(concatCSS("main_styles.css"))  // name after concat 
		.pipe(gulp.dest('./app/css/'))       // save to destination dir 
		.pipe(cleanCSS())                    // minify 
		.pipe(rename('main_styles.min.css')) // rename after minify
		.pipe(gulp.dest('./app/css/'))       // save to destination dir
		.pipe(connect.reload());
		//.pipe(notify('--- CSS Done OK! --'));
}); 

gulp.task('html', function(){
	return gulp.src('./app/*.html') 
		.pipe(connect.reload());
}); 

gulp.task('watch', function(){
	gulp.watch('./css/*.css', ['css']) 
	gulp.watch('./app/*.html', ['html']) 
});

gulp.task('default', ['connect', 'css', 'html', 'watch']);

/*

CONSOLE:
$ gulp 

Browser (livereload):
http://localhost:8080  
http://localhost:8080/index.html
http://localhost:8080/about.html

*/  
