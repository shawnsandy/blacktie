const gulp = require("gulp");
const sass = require("gulp-sass");
const print = require("gulp-print");
const cssnano = require("gulp-cssnano");
const reports = require("gulp-sizereport");

gulp.task("sass", () =>
  gulp
    .src("./src/stylesheets/*.scss", { base: "./src/stylesheets" })
    .pipe(sass().on("error", sass.logError))
    .pipe(reports({ gzip: true }))
    .pipe(cssnano())
    .pipe(gulp.dest("./gist/css"))
    .pipe(reports({ gzip: true }))
);

gulp.task("watch:sass", () => gulp.watch("./src/css/**/*.scss", ["sass"]));

gulp.task("reports", () =>
  gulp.src("./dist/**/*.*")
  .pipe(reports({ gzip: true }))
);
