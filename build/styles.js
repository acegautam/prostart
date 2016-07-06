var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

gulp.task('dev:styles', compileDevCss);
gulp.task('prod:styles', compileProdCss);

function compileDevCss() {
    console.log('###### CSS PROCESSED ######');
    return gulp
        .src(config.styles.src)
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.styles.dst))
        .pipe($.livereload());
}

function compileProdCss() {
    console.log('###### CSS PROCESSED (FOR PROD) ######');
    return gulp
        .src(config.styles.src)
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe(gulp.dest(config.styles.dst));
}
