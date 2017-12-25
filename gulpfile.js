const gulp = require('gulp');
const sass = require('gulp-sass')
const print = require('gulp-print')


gulp.task('sass', () =>
	gulp.src('./src/stylesheets/*.scss', {"base" : "./src/stylesheets"})
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css'))
	.pipe(print())
)

gulp.task("watch:sass", () =>
	gulp.watch('./src/css/**/*.scss')
)
