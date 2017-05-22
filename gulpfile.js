"use strict"

var gulp         = require('gulp');
var concatCSS    = require('gulp-concat-css'); 
var cleanCSS     = require('gulp-clean-css'); // to minify  
var rename       = require("gulp-rename"); 
var notify       = require("gulp-notify"); 
var autoprefixer = require('gulp-autoprefixer');
var connect      = require('gulp-connect'); 

var less           = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix     = new LessAutoprefix({ browsers: ['last 2 versions'] });

// SERVER 
gulp.task('connect', function() {
	connect.server({
		root: 'public_html',
		livereload: true
	});
}); 

// LESS to CSS 
gulp.task('less', function () { 
  return gulp.src('./src/less/main_styles.less') 
    .pipe(less({
    	plugins: [autoprefix] 
    })) 
    .pipe(gulp.dest('./public_html/css')) 
    .pipe(connect.reload()); 
});

//CSS minify (start 'less' before css_minify)  
gulp.task('css_minify', ['less'], function(){  
	return gulp.src('./public_html/css/main_styles.css') // src files  
		.pipe(cleanCSS())                                // minify 
		.pipe(rename('main_styles.min.css'))             // rename after minify
		.pipe(gulp.dest('./public_html/css/'))           // save to destination dir 
		.pipe(connect.reload()); 
		//.pipe(notify('--- CSS Done OK! --'));
}); 

gulp.task('html', function(){
	return gulp.src('./public_html/*.html') 
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./src/less/*.less', ['css_minify']) // less with minify css
	gulp.watch('./public_html/*.html', ['html']) 
});

gulp.task('default', ['connect', 'css_minify', 'html', 'watch']); // compile less with minify css 

/*

CONSOLE:
$ gulp 

Browser (livereload):
http://localhost:8080  
http://localhost:8080/index.html
http://localhost:8080/about.html

*/  
