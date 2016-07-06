var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

gulp.task('dev:scripts', compileDevScripts);
gulp.task('prod:scripts', compileProdScripts);

function compileDevScripts() {
    console.log('###### TRANSPILED ######');
    return gulp
        .src(config.scripts.src)
        .pipe($.cached('compiling'))
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.dst))
        .pipe($.livereload());
}

function compileProdScripts() {
    console.log('###### TRANSPILED (FOR PROD) ######');
    return gulp
        .src(config.scripts.src)
        .pipe($.babel())
        .pipe($.concat(config.scripts.bundle))
        // .pipe($.uglify())
        .pipe(gulp.dest(config.scripts.dst));
}
