const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  cssnano = require('gulp-cssnano'),
	  rename = require('gulp-rename');
	  uglify = require('gulp-uglify');
	  imagemin = require('gulp-imagemin');
	  concat = require('gulp-concat');
gulp.task('css',()=>{
	return gulp.src('./src/sass/*.scss')
		   .pipe(sass({outputStyle: 'expanded'}))
		   //.pipe(cssnano())
		   .pipe(rename({'suf' : '.min'}))
		   .pipe(gulp.dest('./dist/css'));
})
// gulp.task('js',()=>{
// 	return gulp.src('./src/js/*.js')
// 		   .pipe(concat('main.min.js'))
// 		   .pipe(uglify())
// 		   .pipe(gulp.dest('./dist/js'));
// })
	// gulp.task('img',()={
	// 	return gulp.src('./img/*.*')
	// 		   .pipe(imagemin())
	// 		   .pipe(gulp.dest('./dist/img'));
	// })
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['css']);
	// gulp.watch('./src/sass/*.js',['js']);
	// gulp.watch('./img/*.*',['img']);
})
