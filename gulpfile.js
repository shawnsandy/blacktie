const gulp = require('gulp');
const sass = require('gulp-sass')


gulp.task('sass', function(){
	return gulp.src('./src/css/**/*.scss', {"base" : "./src/css"})
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css'))
})

gulp.task("watch:sass", function(){
	return gulp.watch('./src/css/**/*.scss')
})
