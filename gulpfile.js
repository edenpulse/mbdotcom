// Requires
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var minify = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Common tasks
gulp.task('doallthethings', ['styles']);

// Styles SASS
gulp.task('styles', function () {
  gulp.src('./assets/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
    .pipe(minify({keepBreaks:false,keepSpecialComments:0}))
    .pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest('./assets/css/'));
});


// Watcher
gulp.task('watch', function() {
  gulp.watch(['./assets/scss/*.scss'], ['styles']);
});

gulp.task('default', ['doallthethings']);
