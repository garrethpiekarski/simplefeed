var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

//styles
gulp.task('styles', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('vendorscripts', function () {
  return gulp.src('vendorjs/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('scripts', function () {
  return gulp.src('appjs/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('concat.js'))
    .pipe(rename('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('default', ['styles', 'scripts']);