const gulp = require('gulp');
const sass = require('gulp-sass')


gulp.task('sass', () =>
	gulp.src('./src/css/**/*.scss', {"base" : "./src/css"})
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css'))
)

gulp.task("watch:sass", () =>
	gulp.watch('./src/css/**/*.scss')
)
