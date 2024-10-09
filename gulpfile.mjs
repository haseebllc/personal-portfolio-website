// import htmlmin from "gulp-htmlmin";
// import imagemin from "gulp-imagemin";
import ignore from "gulp-ignore";
import gulp from "gulp";
import uglify from "gulp-uglify";
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import clean from "gulp-clean";

// Task to clean - npm run gulp-clean
gulp.task("clean", function () {
  return gulp
    .src(["./assets/javascript/dist", "./assets/css/dist"], {
      allowEmpty: true,
      read: false,
    })
    .pipe(clean());
});

// Task to minify CSS
gulp.task("minify-css", function () {
  return gulp
    .src("./assets/scss/**/*.css")
    .pipe(ignore.exclude(["main.css.map", "responsive.css.map"]))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./assets/css/dist"));
});

// Task to minify JS
gulp.task("minify-js", function () {
  return gulp
    .src("./assets/javascript/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./assets/javascript/dist"));
});

// Watch task - npm run gulp-watch
gulp.task("watch", function () {
  gulp.watch("./assets/scss/*.css", gulp.series("minify-css"));
  gulp.watch("./assets/javascript/*.js", gulp.series("minify-js"));
});

// Default task - npm run gulp
gulp.task("default", gulp.series("clean", "minify-css", "minify-js"));
