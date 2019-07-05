const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  cssnano = require('gulp-cssnano'),
	  rename = require('gulp-rename');
gulp.task('css',()=>{
	return gulp.src('./src/sass/*.scss')
		   .pipe(sass({outputStyle: 'expanded'}))
		   //.pipe(cssnano())
		   .pipe(rename({'suf' : '.min'}))
		   .pipe(gulp.dest('./dist/css'));
})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.css',['css']);
})
	  