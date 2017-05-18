

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

//rename via string 
gulp.src("./src/main/text/hello.txt")
	.pipe(rename("main/text/ciao/goodbye.md"))
	.pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md 