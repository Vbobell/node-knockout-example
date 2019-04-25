const gulp = require('gulp');

gulp.task('copy-css', () => {
    return gulp.src(['./static/css/*'])
          .pipe(gulp.dest('./build/static/css'))
});

gulp.task('copy-js', () => {
    return gulp.src(['./static/js/*'])
          .pipe(gulp.dest('./build/static/js'))
});

gulp.task('copy-index', () => {
    return gulp.src(['./static/index.html'])
          .pipe(gulp.dest('./build'))
});

gulp.task('default', gulp.series(['copy-css', 'copy-js', 'copy-index']));