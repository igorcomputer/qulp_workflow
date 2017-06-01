"use strict"

var gulp           = require('gulp');

// Server/Lifereload
var connect        = require('gulp-connect');

// Less/CSS
var autoprefixer   = require('gulp-autoprefixer'); // for CSS only
var concatCSS      = require('gulp-concat-css');
var cleanCSS       = require('gulp-clean-css'); // minify
var less           = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix     = new LessAutoprefix({ browsers: ['last 2 versions'] });

// Pug
var pug            = require('gulp-pug');

// Utils
var rename         = require("gulp-rename");
var notify         = require("gulp-notify");

// -------- Tasks ----------

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
    .on('error', notify.onError(function (error) {
			return 'Error Compiling LESS:.\n'+ error.message;
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

gulp.task('pug', function buildHTML(){
	return gulp.src([
		'./src/pug/index.pug',
		'./src/pug/page_1.pug'
		])
		.pipe(pug({pretty:true}))
		.on('error', notify.onError(function (error) {
			return 'Error Compiling PUG:.\n'+ error.message;
		}))
		.pipe(gulp.dest('./public_html/'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./src/less/*.less', ['css_minify']) // less with minify css
	gulp.watch('./src/pug/**/*.pug', ['pug'])
});

gulp.task('default', ['connect', 'css_minify', 'pug', 'watch']); // compile less with minify css

/*

CONSOLE:
$ gulp

Browser (livereload):
http://localhost:8080
http://localhost:8080/index.html
http://localhost:8080/about.html

*/
