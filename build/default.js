var gulp = require('gulp'),
    merge = require("merge-stream"),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

require('./scripts');
require('./styles');

// Dev tasks
gulp.task('dev:watch', gulp.series(watchFiles));
gulp.task('dev', gulp.parallel('dev:styles', 'dev:scripts'));
gulp.task('run', gulp.series(clean, 'dev', publish, 'dev:watch'));

// Prod tasks
gulp.task('prod', gulp.parallel('prod:styles','prod:scripts'));
gulp.task('build', gulp.series(clean, 'prod', publish));

// Default task
gulp.task('default', gulp.series(
    clean,
    config.env,
    publish
));

function clean(c) {
    console.log('###### CLEANED ######');
    c();
}

function watchFiles() {
    $.livereload.listen();

    gulp.watch(config.styles.srcdir, gulp.series('dev:styles'));
    gulp.watch(config.scripts.src, gulp.series('dev:scripts'));
}

function publish() {
    console.log('###### PUBLISHED ######');
    var indexpage = gulp
        .src(config.publish.indexsrc)
        .pipe(gulp.dest(config.publish.indexdst)),
        polyfill = gulp
        .src(config.publish.polyfillsrc)
        .pipe(gulp.dest(config.publish.polyfilldst));

    return merge(indexpage, polyfill);
}
