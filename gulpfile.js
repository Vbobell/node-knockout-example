const gulp = require('gulp');

gulp.task('copy-files', () => {
    return gulp.src(['./static/css', './static/images', './static/js', './static/index.html'])
   .pipe(gulp.dest('build'));
});

gulp.task('default', gulp.series(['copy-files']));