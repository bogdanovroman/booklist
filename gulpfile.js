var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-express');
var base64 = require('gulp-base64');
var cleanCSS = require('gulp-clean-css');
var browserify = require('gulp-browserify');

gulp.task('scss', function() {
    gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(base64({
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('public/scss/**/*.scss', ['scss']);
});

gulp.task('server', function () {
    server.run(['bin/www']);
    gulp.watch('public/scss/**/*.scss', ['scss']);
    // gulp.watch('apps/**/*.js', ['browserify']);
    gulp.watch(['app.js', 'tools/**/*.js'], [server.run]);
});

gulp.task('browserify', function() {
    gulp.src('apps/books/App.js')
        .pipe(browserify({
          insertGlobals : false
        }))
        .pipe(gulp.dest('public/js'))
});
