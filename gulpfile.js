const gulp = require('gulp');

gulp.task('copy-files', async () => {
    await gulp.src(['./static/css', './static/images', './static/js'])
          .pipe(gulp.dest('./build/static'))

          return gulp.src(['./static/index.html'])
          .pipe(gulp.dest('./build'))
});

gulp.task('default', gulp.series(['copy-files']));