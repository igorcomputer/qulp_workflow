var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css'); // instead of "gulp-minify-css" (not in use) 
var rename = require("gulp-rename"); 
var notify = require("gulp-notify");

// codes from sources

gulp.task('default', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

//rename via string 
gulp.src("./src/main/text/hello.txt")
	.pipe(rename("main/text/ciao/goodbye.md"))
	.pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md 
